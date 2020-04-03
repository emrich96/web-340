/*
============================================
; Title:  richter-exercise7.2.js
; Author: Emily Richter
; Date:   3 April 2020
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/

// Start program

var assert = require("assert");

// Test outlining a function that splits a string
describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
  });
});

// End program
