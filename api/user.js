const express = require('express');
const db = require('../models/models');
const router = express.Router();
router.get('/',function(req,res){
	db.user.findAll().then(users => res.send(users));
});

module.exports = router;