const isValidNoOfSeats = noOfSeats => Number.isInteger(noOfSeats) && noOfSeats > 0 && noOfSeats < 4;

const isValidSeats = seats => Array.isArray(seats) && seats.length === 15;

module.exports = { isValidNoOfSeats, isValidSeats };