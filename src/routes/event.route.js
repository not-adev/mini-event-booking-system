import { Router } from 'express';
import * as eventController from '../controlers/event.controler.js'
import { validate } from '../middleware/validate.middleware.js';
import {createEventSchema} from '../validations/event.validation.js'
export const eventRoutes = Router()
eventRoutes.get("/", eventController.getEvents);
eventRoutes.post("/", validate(createEventSchema) ,eventController.createEvent);
eventRoutes.post("/:id/attendance",  eventController.markAttendance);

