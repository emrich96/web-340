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

// Create new Node server and listens local on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});

// End program
