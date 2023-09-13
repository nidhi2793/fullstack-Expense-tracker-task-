const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Nidhi@1993",
  database: "completenode",
});

module.exports = db;
