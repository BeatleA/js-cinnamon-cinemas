const { isValidSeats, isValidNoOfSeats } = require("./validation");

const allocateSeats = (seats, noOfSeats) => {
    if (!isValidSeats(seats)) throw new Error("seats not valid");
    if (!isValidNoOfSeats(noOfSeats)) throw new Error("noOfSeats not valid");

    let allocatedSeats = "";
    const firstAvailable = seats.findIndex(seat => seat !== "allocated");
    for (let i = firstAvailable; i < firstAvailable + noOfSeats; i++) {
        if (i !== firstAvailable) allocatedSeats += ", ";
        allocatedSeats += seats[i];
        seats[i] = "allocated";
    }
    return allocatedSeats;
}

module.exports = allocateSeats;