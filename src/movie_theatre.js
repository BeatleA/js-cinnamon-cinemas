const initialiseSeats = () => {
    const seats = [];
    ["A", "B", "C"].forEach(row => [...Array(5).keys()].forEach(number => seats.push(`${row}${number + 1}`)));
    return seats;
}

module.exports = initialiseSeats;