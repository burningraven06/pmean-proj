const express = require('express');
const userRouter = express.Router();
const User = require('../mongo-models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


userRouter.post('/signup', (req, res, next) =>{
	// if (!req.body.email || !req.body.password){
  //   console.log("Values Missing");
	// 	return res.status(500).json({ msg: "Values missing", email_taken: true});
	// }
	User.find({email: req.body.email})
	.exec()
	.then( (users) => {
		if (users.length >1 ){
      console.log("Email Taken");
			return res.status(409).json({msg: "Email Taken"});
		} else {
			bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: err})
        } else {
          const user = new User({
            _id : new mongoose.Types.ObjectId(),
            email : req.body.email,
            password :hash
          });
          user.save()
          .then( result => {
            console.log(result);
            res.status(201).json({ msg: "user created", user_created: true})
          })
          .catch( err => {
            console.log(err);
            res.status(500).json({ error: err});
          });
        }
	    });
		}
	})
  .catch();
});




userRouter.post('/login', (req, res, next) => {
	// if (!req.body.email || !req.body.password){
  //   console.log("Values Missing");
	// 	return res.status(500).json({msg: "Values Missing"});
	// }
	User.find({email: req.body.email})
	.exec()
	.then(users => {
		if (users.length < 1){
      console.log("Email Not Found");
			return res.status(401).json({ 
				msg: "Email Not Found", 
				email_found: false,
			})
		} else {
			bcrypt.compare(req.body.password, users[0].password, (err, result)=>{
				if (err){
					console.log(err);
          return res.status(401).json({ msg: "Auth Failed"});
				} 
				if (result){
					const token = jwt.sign(
						{
							email: users[0].email,
							user_id: users[0]._id,
						}, process.env.JWT_KEY, {
							expiresIn: "4h"
						}
					);
					return res.status(200).json({ 
						msg: "Auth Successful",
						token: token,
					})
				}
				console.log("Invalid Password");
				return res.status(401).json({ 
					msg: "Incorrect Password", 
					email_found: "true",
					incorrect_password: true
				});	
			})
		}
	})
	.catch( error => {
		console.log(err);
		res.status(500).json({ error: err});
  })
});

module.exports = userRouter;