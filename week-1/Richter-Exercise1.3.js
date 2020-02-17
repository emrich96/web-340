/*
=============================================
; Title:  Exercise 1.3
; Author: Emily Richter
; Date:   17 February 2020
; Description: Modules - URL parsing
;============================================
*/

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 1.3"));

// parse URL
const url = require("url");

const parsedURL = url.parse("https://www.example.com/profile?name=richter");

// output
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// end program
