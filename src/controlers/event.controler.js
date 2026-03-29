const eventService = require("../services/event.service");

export const getEvents = async (req, res) => {
    try {
        const events = await eventService.getAllEvents();

        res.status(200).json({
            success: true,
            count: events.length,
            data: events
        });

    } catch (error) {
        console.error("Error fetching events:", error);
        const status = error.status || 500;
        return res.status(status).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
};




export const createEvent = async (req, res) => {
    try {
        const { title, description, event_date, total_capacity } = req.body
        const event = await eventService.createEvent(title, description, event_date, total_capacity)
        res.status(201).json({
            success: true,
            data: event
        });
    } catch (error) {

        console.error("Error fetching events:", error);
        const status = error.status || 500;
        return res.status(status).json({
            success: false,
            message: error.message || "Internal Server Error"
        });

    }
}





export const markAttendance = async (req, res) => {

    try {
        const { booking_id } = req.body
        const attendence = await eventService.markAttendance(booking_id)
        res.status(200).json({
            success: true,
            message: "Attendance recorded successfully",
            data: attendence
        });
    } catch (error) {
        const status = error.status || 500;
        return res.status(status).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
}

