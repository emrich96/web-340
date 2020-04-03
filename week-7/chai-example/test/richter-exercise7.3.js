/*
============================================
; Title:  richter-exercise7.3.js
; Author: Emily Richter
; Date:   3 April 2020
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

// Start program

//Require file from root directory
var fruits = require("../richter-fruits");

// Chai
var chai = require("chai");
var assert = chai.assert;

// Test of fruits function
describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits('Apple,Orange,Mango');
    assert(Array.isArray(f));
  });
});

// End program
