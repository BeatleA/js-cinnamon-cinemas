const { isValidNoOfSeats, isValidSeats } = require("../src/validation");

describe("isValidNoOfSeats", () => {
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

    test.each([
        // Arrange
        ["3"],
        [true],
        [[2]]
    ])("when number of seats not an Integer returns false", (noOfSeats) => {
        // Act
        const result = isValidNoOfSeats(noOfSeats);
        // Assert
        expect(result).toBe(false);
    });
});

describe("isValidSeats", () => {
    test.each([
        // Arrange
        [["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C3", "C4", "C5"], true],
        [["allocated", "allocated", "allocated", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C3", "C4", "C5"], true],
        [3, false],
        [false, false],
        [["A1", "A2", "A3"], false]
    ])("when seats %p returns %p", (seats, expected) => {
        // Act
        const result = isValidSeats(seats);
        // Assert
        expect(result).toBe(expected);
    });
});