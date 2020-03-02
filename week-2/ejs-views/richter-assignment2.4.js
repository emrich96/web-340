/*
============================================
; Title:  Assignment 2.4
; Author: Emily Richter
; Date:   1 March 2020
; Description: Creates a new server and  listens
;              on port 8080.
;===========================================
*/

// Start program

var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use the EJS view engine
app.set("view engine", "ejs");

app.get("/", function(request, response) {
  response.render("index", {
    firstName: "Emily",
    lastName: "Richter",
    address: "42 Wallaby Way, Sydney"
  });
});

// Start local server
http.createServer(app).listen(8080, function() {
  console.log("EJS-Views app started on port 8080.");
});

// End program
