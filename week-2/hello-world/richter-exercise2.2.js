/*
============================================
; Title:  Exercise 2.2
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

app.use(function(request, response){
  console.log("In comes a request to: " + request.url);

  response.end("Hello World");
});

http.createServer(app).listen(8080, function(){
  console.log("Server listening on port 8080")
});

// End program
