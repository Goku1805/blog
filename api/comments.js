const express = require('express');
const db = require('../models/models');
const { Comment } = require('../models/models');
const router = express.Router();
router.post('/',function(req,res){
	Comment.create({
		id: req.body.title,
		body: req.body.body,
	}).then(function(ee) {
		res.status(200)
		.json({
			message: 'comment added succesfully!',
		})	
	});

});
module.exports = router;