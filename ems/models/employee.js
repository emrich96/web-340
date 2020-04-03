/*
============================================
; Title:  employee.js
; Author: Emily Richter
; Date:   3 April 2020
; Description: File for the employee database model
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee schema
let EmployeeSchema = new Schema( {
  firstName:{ type: String, required: true },
  lastName:{ type: String, required: true },
});

// Export model to make it publicly available
module.exports = mongoose.model('Employee', EmployeeSchema);
