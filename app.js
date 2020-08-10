const express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const userRoute = require("./api/user");
const postRoute = require("./api/post");
const commentRoute = require("./api/comments");
var db = require('./models/models');
app.use("/user",userRoute);
app.use("/post",postRoute);
app.use("/comments",commentRoute);

module.exports = app; 