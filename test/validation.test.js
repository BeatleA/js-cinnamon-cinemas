const isValidNoOfSeats = require("../src/validation");

test.each([
    // Arrange
    [1, true],
    [2, true],
    [3, true]
])("when requesting %d seats returns %p", (requestedSeats, expected) => {
    // Act
    const result = isValidNoOfSeats(requestedSeats);
    expect(result).toBe(expected);
});