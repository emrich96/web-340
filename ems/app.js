/*
============================================
; Title:  app.js
; Author: Emily Richter
; Date:   21 March 2020
; Description:  Server file for the ems application
;===========================================
*/

// Start program

// Require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var Employee = require("./models/employee");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

// mLab connection
var mongoDB = "mongodb+srv://emrich96:apassword0123@buwebdev-cluster-1-m6ctp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useNewUrlParser: true, useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

// Setup csrf protection
var csrfProtection = csrf({cookie: true});

// Initialize application
var app = express();

// Morgan logger
app.use(logger("short"));

// Helmet
app.use(helmet.xssFilter());

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(csrfProtection);

app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

// Set up views and view's directory path
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);

/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs, Employee[]
 * URL: localhost:8080
 */
app.get("/", function (request, response) {
  Employee.find({}, function (err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      response.render('index', {
        title: 'EMS Home',
        employees: employees
      })
    }
  });
});

/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */
app.get("/new", function(request, response) {
  response.render("new", {
    title: 'EMS | New'
  });
});

/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textFirstName and txtLastName
 * Response: index.ejs
 * URL: localhost:8080/process
 */
app.post('/process', function(req, res) {
  // console.log(request.body.txtName);
  console.log(`${req.body.txtFirstName} + ${req.body.txtLastName}`);
  if (!req.body.txtFirstName || !req.body.txtLastName) {
    res.status(400).send('Entries must have both names filled out.');
    return;
  }

  // get the request's form data
  const newFirstName = req.body.txtFirstName;
  const newLastName = req.body.txtLastName;

  // create a Employee model
  let employee = new Employee({
    firstName: newFirstName,
    lastName: newLastName
  });

  // save
  employee.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(newFirstName + " " + newLastName + ' saved successfully!');
      res.redirect('/');
    }
  });
});

/**
 * Description: Redirects users to the 'home' page'
 * Type: HttpGet
 * Request: queryName
 * Response: view.ejs, Employee[] | index.ejs
 * URL: localhost:8080/view/:queryName
 */
app.get('/view/:queryName', function(req, res) {
  const queryName = req.params['queryName'];

  Employee.find({'lastName': queryName}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);

      if (employees.length > 0) {
        res.render('view', {
          title: 'EMS | View',
          employee: employees
        })
      } else {
        res.redirect('/');
      }
    }
  })
});


// Create new Node server and listens local on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});

// End program
