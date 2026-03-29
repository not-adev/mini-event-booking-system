import { Router } from "express";
// const bookingController = require("../controllers/bookingController");
export const bookingRoutes = Router()
bookingRoutes.post("/", bookingController.createBooking);
bookingRoutes.get("/users/:id/bookings", bookingController.getUserBookings);

