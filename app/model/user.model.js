const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

	var userSchema = new Schema({
		username: String,
		password: String
	});

	module.exports = mongoose.model('users' , userSchema);