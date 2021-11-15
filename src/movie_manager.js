const allocateSeats = (seats, noOfSeats) => {
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