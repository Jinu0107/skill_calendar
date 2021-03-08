const express = require('express');
const http = require('http');
const { pool } = require('./DB/DB');
const { session_secret } = require('./DB/Credential');
const body_parser = require("body-parser");


// Create express instance
const app = express();
const server = http.createServer(app);
const session = require('express-session');


app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: session_secret
}));

app.use( body_parser.json() );
app.use( body_parser.urlencoded({ extended : true }) );



// Require API routes
const users = require('./routes/users');

// Import API Routes
app.use("/user", users);


app.get("/insert", async (req, res) => {
    console.log("dsa");
    await pool.query("INSERT INTO `users`(`user_id`, `user_name`, `user_password`, `user_level`, `user_img`, `user_count`) VALUES (? , PASSWORD(?) , ? , ? , ? , ?)", ["test", "안진우", "123", 1, "", 4]);
    res.json("dsadsas");
});

// Export express app
module.exports = app;


