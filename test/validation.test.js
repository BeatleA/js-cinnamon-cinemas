const isValidNoOfSeats = require("../src/validation");

test.each([
    // Arrange
    [1, true],
    [2, true],
    [3, true],
    [0, false],
    [4, false]
])("when requesting %d seats returns %p", (requestedSeats, expected) => {
    // Act
    const result = isValidNoOfSeats(requestedSeats);
    // Assert
    expect(result).toBe(expected);
});