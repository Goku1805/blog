const express = require('express');
const db = require('../models/models');
const { Post } = require('../models/models');
const router = express.Router();

router.get('/',function(req,res){
	Post.findAll().then(posts => res.send(posts));
});

router.post('/', function(req, res) {
	Post.create({
		title: req.body.title,
		body: req.body.body,
	}).then(function(ee) {
		res.status(200)
		.json({
			message: 'success',
		})	
	})
	
});


router.delete("/:id",function(req,res){
	Post.destroy({
		where:{
			id:req.params.id
		}
		
	}).then(function(ee) {
		res.status(200)
		.json({
			message: 'successfully deleted',
		});

	});
});
module.exports = router;