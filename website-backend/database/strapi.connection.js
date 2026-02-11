require('dotenv').config({ path: '../.env' })

const mysql = require('mysql2')

const db_user = process.env.STRAPI_DB_USER
const db_password = process.env.STRAPI_DB_PASSWORD
const db_host = process.env.STRAPI_DB_HOST
const db_name = process.env.STRAPI_DB_NAME
const db_port = process.env.STRAPI_DB_PORT || 3307;

const strapi_pool = mysql.createPool({
  connectionLimit: 100, // Adjust based on your needs
  host: db_host,
  user: db_user,
  password: db_password,
  database: db_name,
  port: db_port,
  waitForConnections: true,
  queueLimit: 0,
  connectTimeout: 10000,
  acquireTimeout: 10000,
  // Automatically reconnect
  reconnect: true
})

// Test the strapi_pool on startup
strapi_pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error getting connection from strapi_pool:', err)
    return
  }
  console.log('✅ Connection strapi_pool established successfully')
  connection.release()
})

// Handle strapi_pool errors
strapi_pool.on('error', (err) => {
  console.error('⚠️ Database strapi_pool error:', err)
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('Database connection lost. strapi_pool will reconnect automatically.')
  }
})

module.exports = strapi_pool