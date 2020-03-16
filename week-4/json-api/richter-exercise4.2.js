/*
============================================
; Title:  Exercise 4.2
; Author: Emily Richter
; Date:   14 March 2020
; Description: Demonstrates how to return JSON from
;              a Node.js server.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/customer/:id", function(request, response) {
  var id = parseInt(request.params.id, 10);

  response.json({
    firstName: "Arsenius",
    lastName: "Jigger",
    employeeId: id
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
