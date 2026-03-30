import 'dotenv/config'
import express from 'express'
import {eventRoutes} from './routes/event.route.js'
import { bookingRoutes } from './routes/booking.route.js';
import { logger } from './middleware/logger.middleware.js';
import swaggerUi from 'swagger-ui-express'
import YAML  from 'yamljs';

const app = express();

app.use(express.json());
app.use(logger)

const swaggerDocument = YAML.load("./src/docs/swaggerUi.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/events", eventRoutes);
app.use("/bookings", bookingRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});