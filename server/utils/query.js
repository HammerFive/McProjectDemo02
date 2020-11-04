const mysql = require('mysql2/promise')
const MYSQL_CONFIG = require('../config/mysql_config') // 数据库配置

// mysql
const pool = mysql.createPool(MYSQL_CONFIG)

// query sql 语句入口
async function query (sql, options) {
  const conn = await pool.getConnection()
  if (conn) {
    const [rows] = await conn.query(sql, options)
    conn.release()
    return rows
  }
}

module.exports = {
  query
}
