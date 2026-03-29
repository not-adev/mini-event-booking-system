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




export const createEvent = async ( title, description, event_date, total_capacity ) => {
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


export const markAttendance = async (booking_code) => {
    const connection = await pool.getConnection();

    try {


       
        const [bookings] = await connection.query(
            "SELECT id FROM bookings WHERE booking_code = ?",
            [booking_code]
        );

        if (bookings.length === 0) {
            const error = new Error("Invalid booking code");
            error.status = 404;
            throw error;
        }

        const booking_id = bookings[0].id;

       
        const [attendance] = await connection.query(
            "SELECT id FROM attendance WHERE booking_id = ?",
            [booking_id]
        );

        if (attendance.length > 0) {
            const error = new Error("Attendance already marked");
            error.status = 400;
            throw error;
        }

       
        const [result] = await connection.query(
            "INSERT INTO attendance (booking_id) VALUES (?)",
            [booking_id]
        );

        return {
            success: true,
            attendance_id: result.insertId
        };


    } finally {
        connection.release();
    }
};
