const allocateSeats = require("../src/movie_manager");
const initialise = require("../src/movie_theatre");

// Arrange
const seats = initialise();

test.each([
    // Arrange
    [1, "A1"],
    [2, "A2, A3"]
])("returns allocated seats", (seatsRequested, expected) => {
    // Act
    const result = allocateSeats(seats, seatsRequested);
    // Assert
    expect(result).toBe(expected);
});