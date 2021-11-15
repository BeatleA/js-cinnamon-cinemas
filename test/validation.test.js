const isValidNoOfSeats = require("../src/validation");

test.each([
    // Arrange
    [1, true],
    [2, true],
    [3, true],
    [0, false],
    [4, false]
])("when requesting %d seats returns %p", (noOfSeats, expected) => {
    // Act
    const result = isValidNoOfSeats(noOfSeats);
    // Assert
    expect(result).toBe(expected);
});