const express = require('express');
const http = require('http');
const { session_secret } = require('./DB/Credential');
const body_parser = require("body-parser");
const jwt = require('jsonwebtoken');


// Create express instance
const app = express();
const server = http.createServer(app);
const session = require('express-session');


app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: session_secret
}));

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));



// Require API routes
const users = require('./routes/users');

// Import API Routes
app.use("/user", users);


// Export express app
module.exports = app;


