const initialiseSeats = require("../src/movie_theatre");

test("returns initialised movie theatre seats", () => {
    // Arrange
    const expected = ["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C3", "C4", "C5"];
    // Act
    const result = initialiseSeats();
    // Assert
    expect(result).toEqual(expected);
});