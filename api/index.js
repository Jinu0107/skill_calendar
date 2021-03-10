const express = require('express');
const http = require('http');
const { session_secret } = require('./DB/Credential');
const body_parser = require("body-parser");


// Create express instance
const app = express();
const server = http.createServer(app);

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


