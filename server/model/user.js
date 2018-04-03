import mongo from 'mongoose'
import sha1 from 'sha1'

const schema = new mongo.Schema({
	username: String,
	password: {
		type: String,
		select: false
	},
	oauth: {
		google: String,
		twitter: String
	}
})

schema.methods.auth = function (password) {
	if (sha1(password) === this.password) {
		return true
	}
	return false
}

export default mongo.model('user', schema)
