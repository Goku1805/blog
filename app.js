const express = require("express");
var app = express();
const userRoute = require("./api/user");
var db = require('./models/models');
app.use("/user",userRoute);
module.exports = app; 