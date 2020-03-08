/*
============================================
; Title:  Exercise 3.3
; Author: Emily Richter
; Date:   7 March 2020
; Description: Demonstrates routing
;===========================================
*/

/*
Test Cases:
localhost:8080/1234
localhost:8080/5678
localhost:8080/9012
*/

// Start program

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:employeeId", function(request, response) {
  var employeeId = parseInt(request.params.employeeId, 10);
  response.render("index", {
    employeeId: employeeId
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080.");
});

// End program
