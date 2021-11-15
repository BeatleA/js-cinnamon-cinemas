const allocateSeats = require("../src/movie_manager");
const initialise = require("../src/movie_theatre");

// Arrange
const seats = initialise();

test.each([
    // Arrange
    [1, "A1"],
    [2, "A2, A3"],
    [1, "A4"],
    [2, "A5, B1"],
    [3, "B2, B3, B4"],
    [3, "B5, C1, C2"],
    [2, "C3, C4"],
    [1, "C5"],
])("returns allocated seats", (seatsRequested, expected) => {
    // Act
    const result = allocateSeats(seats, seatsRequested);
    // Assert
    expect(result).toBe(expected);
});