const { isValidSeats, isValidNoOfSeats } = require("./validation");

const allocateSeats = (seats, noOfSeats) => {
    if (!isValidSeats(seats)) throw new Error("seats not valid");
    if (!isValidNoOfSeats(noOfSeats)) throw new Error("noOfSeats not valid");

    let allocatedSeats = "";
    const firstAvailable = findAvailableSeat(seats);
    if (hasEnoughSeats(firstAvailable, noOfSeats)) {
        allocatedSeats = seats.splice(firstAvailable, noOfSeats, ...Array(noOfSeats).fill("allocated")).join(", ");
    } else {
        console.log("Not enough seats");
    }
    return allocatedSeats;
}

const findAvailableSeat = seats => seats.findIndex(seat => seat !== "allocated");

const hasEnoughSeats = (firstAvailable, noOfSeats) => firstAvailable !== -1 && firstAvailable + noOfSeats <= 15;

module.exports = allocateSeats;