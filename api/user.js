const express = require('express');
const db = require('../models/models');
const { User } = require('../models/models');
const router = express.Router();
router.get('/',function(req,res){
	db.User.findAll().then(users => res.send(users));
});
router.get('/:id',function(req,res){
	db.User.findAll({
		where:{
			userId:req.params.id
		}
	}).then(users => res.send(users));
});
router.post('/', function(req, res) {
	User.create({
		id:req.body.id,
		posts: req.body.posts,
		userId: req.body.userId,
	}).then(function(ee){
		res.status(200)
		.json({
			message: 'success entry of user',
		});	
	});
});
module.exports = router;