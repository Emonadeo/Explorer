import { Router } from 'express'
import passport from 'passport'
import secret from '../secret.js'

// mongoose
import User from '../model/user'

const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const TwitterStrategy = require('passport-twitter').Strategy

const router = Router()

// session serialization

passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user)
	})
})

// passport strategies

passport.use(new LocalStrategy(
	function (username, password, done) {
		User.findOne({ username: username }).then((user) => {
			if (!user) {
				return done(null, false) // no such username
			}
			if (!user.auth(password)) {
				return done(null, false) // wrong password
			}
			return done(null, user)
		})
	}
))

passport.use(new GoogleStrategy(
	{
		clientID: secret.google.clientID,
		clientSecret: secret.google.clientSecret,
		callbackURL: '/auth/google/redirect'
	},
	function (accessToken, refreshToken, profile, done) {
		User.findOne({ 'oauth.google': profile.id }).then((user) => {
			if (user) {
				// found existing user
				console.log('logged in as user: ', user)
				done(null, user)
			} else {
				// create new user
				User({
					username: profile._json.nickname,
					password: '',
					oauth: {
						google: profile.id,
						twitter: ''
					}
				}).save().then((user) => {
					console.log('new user created: ', user)
					done(null, user)
				})
			}
		})
	}))

passport.use(new TwitterStrategy(
	{
		consumerKey: secret.twitter.consumerKey,
		consumerSecret: secret.twitter.consumerSecret,
		callbackURL: '/auth/twitter/redirect'
	},
	function (token, tokenSecret, profile, done) {
		User.findOne({ 'oauth.twitter': profile.id }).then((user) => {
			if (user) {
				// found existing user
				console.log('logged in as user: ', user)
				done(null, user)
			} else {
				// create new user
				User({
					username: profile.username,
					password: '',
					oauth: {
						google: '',
						twitter: profile.id
					}
				}).save().then((user) => {
					console.log('new user created: ', user)
					done(null, user)
				})
			}
		})
	}))

// authentication routes

router.get('/', passport.authenticate('local'))
router.get('/google', passport.authenticate('google',	{	scope: ['profile'] }))
router.get('/twitter', passport.authenticate('twitter'))

// redirect

router.get('/google/redirect',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/'
	}))

router.get('/twitter/redirect',
	passport.authenticate('twitter', {
		successRedirect: '/',
		failureRedirect: '/'
	}))

// logout

router.get('/logout', (req, res) => {
	req.logout()
	res.redirect('/')
})

export default router
