/*
============================================
; Title:  Exercise 3.2
; Author: Emily Richter
; Date:   7 March 2020
; Description: Creates a new server and  listens
;              on port 8080.
;===========================================
*/

/*
Test Cases:
localhost:8080/test/
localhost:8080/test/home
localhost:8080/test/home/1
*/

// Start program

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function(request, response) {
  response.render("index",{
    message: "This is the Morgan Logger Example. Hopefully it works."
  });
});

// Start server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});

// End program
