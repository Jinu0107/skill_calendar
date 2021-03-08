const mysql = require('mysql2');
const {credential} = require('./credential');

//jsp connection pool (스포닝 풀)
// Driver.getConnection
const pool = mysql.createPool(credential);

const promisePool = pool.promise();

module.exports.pool = promisePool;