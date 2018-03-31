import { Router } from 'express'
import passport from 'passport'
// import secret from './secret.js'

// const GoogleStrategy = require('passport-google-oauth20').Strategy()
// const TwitterStrategy = require('passport-twitter').Strategy()

const router = Router()

// passport strategies

/* passport.use(new GoogleStrategy(
	{
		clientID: secret.google.clientID,
		clientSecret: secret.google.clientSecret,
		callbackURL: '/auth/google/redirect'
	},
	function (token, tokenSecret, profile, done) {
		// user
	}))

passport.use(new TwitterStrategy(
	{
		consumerKey: secret.twitter.consumerKey,
		consumerSecret: secret.twitter.consumerSecret,
		callbackURL: '/auth/twitter/redirect'
	},
	function (token, tokenSecret, profile, done) {
		// user
	})) */

// authentication routes

router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}))

export default router
