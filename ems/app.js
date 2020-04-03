/*
============================================
; Title:  app.js
; Author: Emily Richter
; Date:   21 March 2020
; Description:  Server file for the ems application
;===========================================
*/

// Start program

// Require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var Employee = require("./models/employee");

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

// Initialize application
var app = express();

// Set up views and view's directory path
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Morgan logger
app.use(logger("short"));

app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page"
  });
});

// Model
var employee = new Employee({
  firstName: "Emily",
  lastName: "Richter"
})

// Create new Node server and listens local on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});

// End program
