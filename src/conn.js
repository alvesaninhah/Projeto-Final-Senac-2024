const mysql = require('mysql2/promise');

const conn = mysql.createPool({
    host: 'localhost',
    port: 3308,
    user:'root',
    password: 'root',
    database: 'dbWebc'
});

module.exports = conn;