import { pool } from '../config/db.js'

export const getAllEvents = async () => {
    const connection = await pool.getConnection()
    try {
        const [events] = await connection.query(
            `SELECT 
            id,
            title,
            description,
            event_date,
            total_capacity,
            remaining_tickets,
            created_at
        FROM events
        ORDER BY event_date ASC`
        );
        return events
    } catch (error) {
        throw error
    }
    finally {
        connection.release()
    }
}




export const createEvent = async ({ title, description, event_date, total_capacity }) => {
    const connection = await pool.getConnection();

    try {

        const [result] = await connection.query(
            `INSERT INTO events 
       (title, description, event_date, total_capacity, remaining_tickets)
       VALUES (?, ?, ?, ?, ?)`,
            [title, description, event_date, total_capacity, total_capacity]
        );

        

        return {
            id: result.insertId,
            title,
            event_date,
            total_capacity
        };

    } finally {
        connection.release();
    }
}