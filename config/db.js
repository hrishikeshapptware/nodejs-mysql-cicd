var mysql = require("mysql2/promise");

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

const db = async () => {
  var con = await mysql.createConnection(config);
  return con;
};

const sqlQuery = async (query, data) => {
  const con = await db();
  const result = await con.query(query, data);
  return result;
};

module.exports = { sqlQuery };
