import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import session from 'express-session'
import passport from 'passport'
import mongo from 'mongoose'
import routes from './routes'
import secret from './secret'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// MongoDB
mongo.connect('mongodb://' + secret.mongo.user + ':' + secret.mongo.pwd + '@' + secret.mongo.host + ':' + secret.mongo.port + '/' + secret.mongo.db,
	(error) => {
		if (error) {
			console.log(error)
		}
	})

// Configure middleware
app.use(session({
	name: 'sid',
	secret: secret.session,
	resave: false,
	saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

// Initialize Router
app.use(routes)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
	const builder = new Builder(nuxt)
	builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
