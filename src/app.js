import express from 'express'
// const eventRoutes = require("./routes/eventRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");

// const swaggerUi = require("swagger-ui-express");
// const YAML = require("yamljs");

const app = express();
app.use(express.json());

// const swaggerDocument = YAML.load("./swagger.yaml");

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use("/events", eventRoutes);
// app.use("/bookings", bookingRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});