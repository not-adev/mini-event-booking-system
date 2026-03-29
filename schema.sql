
-- cretion of databse if not exists 
CREATE DATABASE IF NOT EXISTS event_booking_system;


-- start using or working on created/existed data base 
USE event_booking_system;


-- user table 
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- event table 
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    event_date DATETIME NOT NULL,
    total_capacity INT NOT NULL,
    remaining_tickets INT NOT NULL CHECK (remaining_tickets >= 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- bookings table 
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    tickets_count INT NOT NULL CHECK (tickets_count > 0),
    booking_code VARCHAR(50) UNIQUE NOT NULL ,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

-- attandence table 
CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT NOT NULL,
    entry_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (booking_id) REFERENCES bookings(id)
);

-- indexing for better perfomence 
CREATE INDEX idx_user_bookings ON bookings(user_id);
CREATE INDEX idx_event_bookings ON bookings(event_id);


-- dummy data insetion  
INSERT INTO users (name, email)
VALUES
('Arif ', 'Arif@gmail.com'),
('jatin', 'jatin@gmail.com');

INSERT INTO events (title, description, event_date, total_capacity, remaining_tickets)
VALUES
('Tech Conference', 'Annual tech conference', '2026-06-10 10:00:00', 100, 100);