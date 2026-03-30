# Event Booking System API

A simple **Event Management & Ticket Booking API** built with **Node.js, Express, and MySQL**.
This system allows users to create events, book tickets, track bookings, and mark attendance.

The project demonstrates **REST API design, database relationships, validation, and transaction handling**.

---

## Features

* Create events with limited capacity
* Book tickets for events
* Prevent overbooking
* Retrieve all events
* Retrieve bookings for a specific user
* Mark attendance using booking codes
* Request validation using **Joi**
* API documentation using **Swagger (OpenAPI)**

---

## Tech Stack

* **Node.js**
* **Express.js**
* **MySQL**
* **Joi** (validation)
* **Swagger UI / OpenAPI**
* **ES Modules**

---

## Project Structure

```
src/
│
├── config/
│   └── db.js
|
│
├── controllers/
│   ├── booking.controller.js
│   └── event.controller.js
|
├── middleware/
│ └── logger.middleware.js
│ └── validate.middleware.js
│
├── routes/
│   ├── booking.routes.js
│   └── event.routes.js
│
├── services/
│   ├── booking.service.js
│   └── event.service.js
│
├── validations/
│   ├── booking.validation.js
│   └── event.validation.js
│
├── docs/
│   └── swagger.yaml
│   └── event_booking.postman_collection.json
│
└── app.js
```

---

## Database Setup

Run the SQL schema file to create the database and tables.

```
schema.sql
```

Run using MySQL:

```bash
mysql -u root -p < schema.sql
```

This will create:

* `users`
* `events`
* `bookings`
* `attendance`

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/event-booking-api.git
```

Install dependencies:

```bash
npm install
```

---

## Running the Server

Start the server:

```bash
npm run start
```

Server runs on:

```
http://localhost:3000
```

---

## API Documentation

Swagger documentation is available at:

```
http://localhost:3000/api-docs
```

---

## API Endpoints

### Events

| Method | Endpoint  | Description        |
| ------ | --------- | ------------------ |
| GET    | `/events` | Get all events     |
| POST   | `/events` | Create a new event |

---

### Bookings

| Method | Endpoint               | Description                |
| ------ | ---------------------- | -------------------------- |
| POST   | `/bookings`            | Book tickets for an event  |
| GET    | `/users/{id}/bookings` | Get all bookings of a user |

---

### Attendance

| Method | Endpoint                  | Description                        |
| ------ | ------------------------- | ---------------------------------- |
| POST   | `/events/{id}/attendance` | Mark attendance using booking code |

---

## Example Request

### Create Event

```
POST /events
```

```json
{
  "title": "Tech Conference",
  "description": "Annual tech conference",
  "event_date": "2026-06-10T10:00:00",
  "total_capacity": 100
}
```

---

### Book Tickets

```
POST /bookings
```

```json
{
  "user_id": 1,
  "event_id": 1,
  "tickets_count": 2
}
```

---

## Key Concepts Implemented

* RESTful API design
* Database indexing
* Foreign key relationships
* Input validation
* Error handling
* Transaction-safe booking logic
* Swagger API documentation

---

## Author

Arif Ansari
