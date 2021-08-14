const mysql = require("mysql")
require("dotenv").config()

module.exports = mysql.createConnection({
  host: process.env.DB_HOST,
  // socketPath: process.env.SOCKET_PATH,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})