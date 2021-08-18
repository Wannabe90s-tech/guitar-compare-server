const mysql = require("mysql")
require("dotenv").config()

module.exports = mysql.createConnection({
  // host: process.env.DB_HOST,
  host: process.env.DB_HOST_LOCAL,
  // socketPath: process.env.SOCKET_PATH,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
  database: process.env.DB_NAME_LOCAL
})

// connection.generatePageBy = (data) => {
//   let filters = ""
//   let pagination = ""
//   let sorter = ""

//   if (data !== undefined) {
//       if (data.filters !== undefined) {
//           for (const key in data.filters) {
//               if (Array.isArray(data.filters[key])) {
//                   filters += `AND ${key} IN ('${data.filters[key].join("','")}') `
//               } else if (data.filters[key] !== null) {
//                   filters += `AND ${key} LIKE (${connection.escape('%' + data.filters[key] + '%')}) `
//               }
//           }
//       }
//       if (data.pagination !== undefined && data.pagination.current !== undefined && data.pagination.pageSize !== undefined) {
//           pagination = `LIMIT ${(data.pagination.current - 1) * data.pagination.pageSize}, ${data.pagination.pageSize} `
//       }
//       if (data.sorter !== undefined && data.sorter.field !== undefined && data.sorter.order !== undefined) {
//           sorter = `ORDER BY ${data.sorter.field} ${(data.sorter.order === "ascend" || data.sorter.order === "ASC") ? "ASC" : "DESC"} `
//       }
//   }

//   return { filters, pagination, sorter }
// }