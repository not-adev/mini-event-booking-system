import { pool } from '../config/db.js'
import { v4 as uuidv4 } from "uuid";

export const createBooking = async ({ user_id, event_id, tickets_count }) => {
    const connection = await pool.getConnection();

    try {
        await connection.beginTransaction();


        const [events] = await connection.query(
            "SELECT * FROM events WHERE id = ? FOR UPDATE",
            [event_id]
        );

        // check if their is a real event 
        if (events.length === 0) {
            const error = new Error("Event not found");
            error.status = 404;
            throw error;
        }

        const event = events[0];

        // Checking ticket availability
        if (event.remaining_tickets < tickets_count) {
            const error = new Error(`Not enough tickets available , Availible ticket are ${event.remaining_tickets}`);
            error.status = 400
            throw error;
        }

        // Updating remaining tickets
        await connection.query(
            "UPDATE events SET remaining_tickets = remaining_tickets - ? WHERE id = ?",
            [tickets_count, event_id]
        );

        // Generating unique booking code
        const bookingCode = uuidv4();

        // Create booking
        const [result] = await connection.query(
            `INSERT INTO bookings(user_id, event_id, tickets_count, booking_code)
        VALUES(?, ?, ?, ?)`,
            [user_id, event_id, tickets_count, bookingCode]
        );

        await connection.commit();

        return {
            booking_id: result.insertId,
            booking_code: bookingCode
        };
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
};



export const getUserBookings = async ({ user_id }) => {
    const connection = await pool.getConnection();
    try {
        const [bookings] = await connection.query(
            " SELECT b.tickets_count, b.booking_code, b.booking_date,e.title, e.event_date FROM bookings b JOIN events e ON b.event_id = e.id WHERE b.user_id = ?",
            [user_id]
        )

        return {
            bookings,
            success: true,
        }
    } catch (error) {
        throw error;
    }
    finally {
        connection.release();
    }

}
