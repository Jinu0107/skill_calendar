const express = require('express');
const body_parser = require("body-parser");

Date.prototype.normalization = function () {
    return new Date(`${this.getFullYear()}-${this.getMonth() + 1}-${this.getDate()}`)
}


// Create express instance
const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));



// Require API routes
const users = require('./routes/users');
const calendar = require('./routes/calendar');

// Import API Routes
app.use("/user", users);
app.use("/calendar", calendar);


// Export express app
module.exports = app;


