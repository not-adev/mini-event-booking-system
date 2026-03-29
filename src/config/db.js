import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "event_booking_system",
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
