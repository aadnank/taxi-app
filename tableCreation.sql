DROP TABLE IF EXISTS users;
CREATE TABLE users (
    userId INT PRIMARY KEY, 
    phoneNum varchar(10), 
    userName varchar(20)
);

DROP TABLE IF EXISTS drivers;
CREATE TABLE drivers (
    driverId INT PRIMARY KEY, 
    driverName varchar(20)
);

DROP TABLE IF EXISTS booking;
CREATE TABLE booking (
    bookingId INT PRIMARY KEY,
    timeBooked varchar(8), -- YYYYMMDD
    pickup text, --Longitude and Latitude
    dropoff text, --Longitude and Latitude
    userId INT,
    driverID INT,
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (driverID) REFERENCES drivers(driverID)
);