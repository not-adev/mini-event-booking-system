// const bookingService = require("../services/bookingService");

export const createBooking = async (req, res) => {

    try {

        const { user_id, event_id, tickets } = req.body;

        const result = await bookingService.createBooking(
            user_id,
            event_id,
            tickets
        );

        res.status(201).json({
            success: true,
            message: "Booking succefull",
            data: result
        });

    } catch (error) {

        const status = error.status || 500;
        return res.status(status).json({
            success: false,
            message: error.message || "Internal Server Error"
        });

    }

};


export const getUserBookings = async (req, res) => {

    try {
        const { id } = req.params;
        const booking = await bookingService.getUserBookings(id)

        res.status(200).json({
            success: true,
            message: "All bookings of user",
            data: booking
        });
    } catch (error) {
        const status = error.status || 500;
        return res.status(status).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
};