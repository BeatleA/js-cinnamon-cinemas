const allocateSeats = require("../src/movie_manager");
const initialise = require("../src/movie_theatre");

test("returns allocated seats", () => {
    // Arrange
    const seats = initialise();
    const seatsRequested = 1;
    const expected = "A1";
    // Act
    const result = allocateSeats(seats, seatsRequested);
    // Assert
    expect(result).toBe(expected);
});