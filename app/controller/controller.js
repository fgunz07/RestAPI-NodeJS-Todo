'use strict';
const userModel = require('../model/user.model');

exports.Create =  (req, res)=>{
	let user = new userModel({
		username: req.body.username,
		password: req.body.password
	});

	user.save((err , data)=>{
		if(err) throw err;
		res.json({
			message: 'User created'
		});
	});
}
exports.Listusers = (req , res)=>{
	userModel.find({} ,(err , data)=>{
		if(err){
			throw err;
		}else{
			res.status(200);
			res.json({
				message:'List of Users',
				list: data
			})
		}
	})
}
exports.findOne = (req , res)=>{
	userModel.findById({_id: req.params.id} ,(err , data)=>{
		if(err) throw err;
		res.json({
			message:`Welcome ${data.username}`,
			details: data
		});
	});
}
exports.Updated = (req , res)=>{
	userModel.findById({_id: req.params.id}, (err, data)=>{
		if(err) throw err;
		if(req.body.username) data.username = req.body.username;
		if(req.body.password) data.password = req.body.password;
		data.save((err)=>{
			if(err) throw err;
			res.json({
				message: ' User updated thankyou!'
			});
		});
	});
}
exports.userDelete = (req , res)=>{
	userModel.remove({_id: req.params.id}, (err)=>{
		if(err) throw err;
		res.json({
			message: 'User deleted'
		});
	});
}