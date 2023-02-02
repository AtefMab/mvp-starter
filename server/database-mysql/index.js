const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin",
  database: "mvp",
});

module.exports = connection;
