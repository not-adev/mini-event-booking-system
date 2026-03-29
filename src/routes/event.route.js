import { Router } from 'express';
// const eventController = require("../controllers/eventController");
export const eventRoutes = Router()
eventRoutes.get("/", eventController.getEvents);
eventRoutes.post("/", eventController.createEvent);
eventRoutes.post("/:id/attendance", eventController.markAttendance);

