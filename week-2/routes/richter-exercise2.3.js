/*
============================================
; Title:  Exercise 2.3
; Author: Emily Richter
; Date:   1 March 2020
; Description: Creates a new server and  listens
;              on port 8080.
;===========================================
*/

// Start program
var express = require("express");

var http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) {
  response.end("Welcome to the contact page!");
});

app.use(function(request, response) {
  response.statusCode = 404;

  response.end("404!";)
});

http.createServer(app).listen(8080);

// End program
