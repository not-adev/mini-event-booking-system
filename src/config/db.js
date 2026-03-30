import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_USER,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10
});


pool.getConnection()
  .then(connection => {
    console.log('Connected to the MySQL database!');
    connection.release(); // Always release the test connection back to the pool
  })
  .catch(err => {
    console.error(' Database connection failed:', err.message);
  });
