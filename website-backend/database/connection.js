require('dotenv').config({ path: '../.env' })

const mysql = require('mysql')

const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_host = process.env.DB_HOST
const db_name = process.env.DB_NAME

// Use connection pool instead of single connection
const pool = mysql.createPool({
  connectionLimit: 100, // Adjust based on your needs
  host: db_host,
  user: db_user,
  password: db_password,
  database: db_name,
  waitForConnections: true,
  queueLimit: 0,
  connectTimeout: 10000,
  acquireTimeout: 10000,
  // Automatically reconnect
  reconnect: true
})

// Test the pool on startup
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error getting connection from pool:', err)
    return
  }
  console.log('✅ Connection pool established successfully')
  connection.release()
})

// Handle pool errors
pool.on('error', (err) => {
  console.error('⚠️ Database pool error:', err)
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('Database connection lost. Pool will reconnect automatically.')
  }
})

module.exports = pool