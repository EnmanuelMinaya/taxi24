INSERT INTO "Driver" ("name", "availability") VALUES
('John Doe', true),
('Jane Smith', true),
('Robert Johnson', false),
('Emily Davis', true),
('Alice Johnson', true),
('Bob Smith', false),
('Charlie Brown', true),
('Diana Prince', true),
('Evan Wright', false),
('Fiona Harris', true),
('George Miller', true),
('Hannah Walker', false),
('Isaac Newton', true),
('Jane Foster', true),
('Kevin Hart', false),
('Laura Williams', true),
('Mark Davis', false),
('Natalie Parker', true),
('Oliver Turner', true),
('Paula Brooks', false),
('Quincy Adams', true),
('Rachel Green', true),
('Steve Rogers', false),
('Tina Morgan', true);


INSERT INTO "Passenger" (name) VALUES
('Alice Brown'),
('David Wilson'),
('Chris Miller'),
('Eve Anderson');

INSERT INTO "Ride" ("driverId", "passengerId", "startLatitude", "startLongitude", "endLatitude", "endLongitude", "status", "startTime", "endTime") VALUES
(1, 1, 37.7749, -122.4194, 37.7849, -122.4094, 'completed', '2024-09-23 12:00:00', '2024-09-23 12:30:00'),
(2, 2, 34.0522, -118.2437, 34.0622, -118.2337, 'pending', NULL, NULL),
(3, 3, 40.7128, -74.0060, 40.7228, -74.0160, 'active', '2024-09-23 13:00:00', NULL),
(4, 4, 51.5074, -0.1278, 51.5174, -0.1178, 'pending', NULL, NULL);
