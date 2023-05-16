DROP TABLE IF EXISTS users;
CREATE TABLE users (
    userId INTEGER PRIMARY KEY AUTOINCREMENT, 
    phoneNum varchar(10), 
    userName varchar(20)
);

DROP TABLE IF EXISTS drivers;
CREATE TABLE drivers (
    driverId INTEGER PRIMARY KEY AUTOINCREMENT, 
    driverName varchar(20)
);

DROP TABLE IF EXISTS booking;
CREATE TABLE booking (
    bookingId INTEGER PRIMARY KEY AUTOINCREMENT,
    timeBooked varchar(8), -- YYYYMMDD
    pickup text, --Longitude and Latitude
    dropoff text, --Longitude and Latitude
    userId INTEGER,
    driverID INTEGER,
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (driverID) REFERENCES drivers(driverID)
);