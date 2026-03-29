import * as bookingService from '../services/booking.service.js'


export const createBooking = async (req, res) => {

    try {
        console.log("booking controler")
        console.log(req.body)
        const { user_id, event_id, tickets_count } = req.body;
        console.log(user_id, event_id, tickets_count )

        const result = await bookingService.createBooking(
            user_id,
            event_id,
            tickets_count
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