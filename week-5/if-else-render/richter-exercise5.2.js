/*
============================================
; Title:  Exercise 5.2
; Author: Emily Richter
; Date:   21 March 2020
; Description:  Demonstrates EJS 'if-else-render' operations.
;===========================================
*/

// Start program

var express = require("express");
var http = require("http");
var path = require("path");

app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var f = [
  "Emily", "Alex", "Brittany", "Taryn"
];

app.get("/", function(request, response) {
  response.render("index", {
    names: f
  })
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});

// End program
