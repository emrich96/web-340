/*
============================================
; Title:  Exercise 6.3
; Author: Emily Richter
; Date:   27 March 2020
; Description:  Demonstrates Mongoose connection
;===========================================
*/

// Start program

var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// mLab connection
var mongoDB = "mongodb+srv://emrich96:apassword0123@buwebdev-cluster-1-m6ctp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useNewUrlParser: true, useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

// Application
var app = express();
app.use(logger("short"));

// Create Server
http.createServer(app).listen(8080, function() {
  console.log("Application connected to port 8080!");
});

// End program
