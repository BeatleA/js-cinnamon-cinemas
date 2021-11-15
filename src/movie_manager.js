const allocateSeats = (seats, seatsRequested) => {
    let allocatedSeats = "";
    const firstAvailable = seats.findIndex(seat => seat !== "allocated");
    for (let i = firstAvailable; i < firstAvailable + seatsRequested; i++) {
        if (i !== firstAvailable) allocatedSeats += ", ";
        allocatedSeats += seats[i];
        seats[i] = "allocated";
    }
    return allocatedSeats;
}

module.exports = allocateSeats;