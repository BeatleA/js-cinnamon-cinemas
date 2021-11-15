const { isValidSeats, isValidNoOfSeats } = require("./validation");

const allocateSeats = (seats, noOfSeats) => {
    if (!isValidSeats(seats)) throw new Error("seats not valid");
    if (!isValidNoOfSeats(noOfSeats)) throw new Error("noOfSeats not valid");

    const firstAvailable = seats.findIndex(seat => seat !== "allocated");
    if (firstAvailable === -1 || firstAvailable + noOfSeats > 15) {
        console.log("Not enough seats");
        return "";
    }
    let allocatedSeats = "";
    for (let i = firstAvailable; i < firstAvailable + noOfSeats; i++) {
        if (i !== firstAvailable) allocatedSeats += ", ";
        allocatedSeats += seats[i];
        seats[i] = "allocated";
    }
    return allocatedSeats;
}

module.exports = allocateSeats;