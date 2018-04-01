import mongo from 'mongoose'

const schema = new mongo.Schema({
	username: String,
	password: String,
	oauth: {
		google: String,
		twitter: String
	}
})

export default mongo.model('user', schema)
