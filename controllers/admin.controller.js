const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/users.model.js');

//Start new session
router.post('/', (req,res) => {
	Users.findOne({username:req.body.username}, (err, foundUser) => {
		if(bcrypt.compareSync(req.body.password, foundUser.password)){
            req.session.currentUser = foundUser;
            res.status(201).json({
              status:201,
              message:'session created',
			  data:{
				  sessionUser: req.session.currentUser
			  }
            });
        } else {
            res.status(401).json({
              status: 401,
              message:'login failed'
            });
        }
	});
});

//Create new admin
router.post('/newuser', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    Users.create(req.body, (err, createdUser)=>{
		req.session.currentUser = createdUser;
		res.json(createdUser);
    });
});

module.exports = router;
