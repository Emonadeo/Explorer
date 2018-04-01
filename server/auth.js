import { Router } from 'express'
import passport from 'passport'
import secret from './secret.js'

const GoogleStrategy = require('passport-google-oauth20').Strategy
const TwitterStrategy = require('passport-twitter').Strategy

const router = Router()

// passport strategies

passport.use(new GoogleStrategy(
	{
		clientID: secret.google.clientID,
		clientSecret: secret.google.clientSecret,
		callbackURL: '/auth/google/redirect'
	},
	function (accessToken, refreshToken, profile, cb) {
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
	}))

// authentication routes

router.get('/google', passport.authenticate('google',	{	scope: ['profile'] }),	function (req, res) {

})

router.get('/twitter', passport.authenticate('twitter',	{	scope: ['profile'] }),	function (req, res) {

})

// redirect

router.get('/google/redirect',
	passport.authenticate('google', { failureRedirect: '/login' }),
	function (req, res) {
		// Successful authentication, redirect home.
		res.redirect('/')
	})

router.get('/twitter/redirect',
	passport.authenticate('twitter', { failureRedirect: '/login' }),
	function (req, res) {
		// Successful authentication, redirect home.
		res.redirect('/')
	})

export default router
