/*
=============================================
; Title:  Assignment 1.5
; Author: Professor Krasso
; Date:   22 February 2020
; Modified By: Emily Richter
; Description: Demonstrates how to create a Node.js server
;============================================
*/

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Assignment 1.5"));


const http = require('http');

function processRequest(req, res) {
  const body = 'Hey, look! I did a thing!';

  const contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);
}

const s = http.createServer(processRequest);

s.listen(8080);
