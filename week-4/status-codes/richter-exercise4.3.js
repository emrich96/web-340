/*
============================================
; Title:  Exercise 4.3
; Author: Emily Richter
; Date:   14 March 2020
; Description: Demonstrates how to programmatically set
;              Node.js status codes.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/not-found", function(request, response) {
  response.status(404);
  response.json({
    error: "Where'd it go? I can't find it!"
  });
});

app.get("/ok", function(request, response) {
  response.status(200);
  response.json({
    message: "Here's that page you asked for!"
  });
});

app.get("/not-implemented", function(request, response) {
  response.status(501);
  response.json({
    error: "Oops, it's not quite ready yet!"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
