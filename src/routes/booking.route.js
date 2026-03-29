import { Router } from "express";
import { createBookingSchema } from "../validations/booking.validation.js";
import { validate } from '../middleware/validate.middleware.js';
import * as bookingController from '../controlers/booking.controler.js'
export const bookingRoutes = Router()
bookingRoutes.post("/", validate(createBookingSchema),bookingController.createBooking);
bookingRoutes.get("/users/:id/bookings", bookingController.getUserBookings);

