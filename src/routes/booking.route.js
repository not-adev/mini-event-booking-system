import { Router } from "express";
import * as bookingController from '../controlers/booking.controler.js'
export const bookingRoutes = Router()
bookingRoutes.post("/", bookingController.createBooking);
bookingRoutes.get("/users/:id/bookings", bookingController.getUserBookings);

