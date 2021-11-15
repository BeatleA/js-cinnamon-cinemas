const allocateSeats = require("../src/movie_manager");
const initialiseSeats = require("../src/movie_theatre");

describe("allocateSeats", () => {
    test("throws an error if not passed valid arguments", () => {
        expect(() => {
            allocateSeats();
        }).toThrow("seats not valid");

        expect(() => {
            allocateSeats([], 3);
        }).toThrow("seats not valid");

        expect(() => {
            allocateSeats(["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C3", "C4", "C5"]);
        }).toThrow("noOfSeats not valid");

        expect(() => {
            allocateSeats(["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C3", "C4", "C5"], 4);
        }).toThrow("noOfSeats not valid");
    });

    // Arrange
    const seats = initialiseSeats();

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
        [1, ""]
    ])("number of seats requested %d, allocated %s", (noOfSeats, expected) => {
        // Act
        const result = allocateSeats(seats, noOfSeats);
        // Assert
        expect(result).toBe(expected);
    });

    test.each([
        // Arrange
        [2, "A1, A2"],
        [3, "A1, A2, A3"],
        [1, "A1"],
    ])("empty theatre, number of seats requested %d, allocated %s", (noOfSeats, expected) => {
        // Arrange
        const seats2 = initialiseSeats();
        // Act
        const result = allocateSeats(seats2, noOfSeats);
        // Assert
        expect(result).toBe(expected);
    });

    test.each([
        // Arrange
        [3],
        [2],
        [1]
    ])("full theatre, number of seats requested %d, allocated none", noOfSeats => {
        // Arrange
        const seats = new Array(15).fill("allocated");
        // Act
        const result = allocateSeats(seats, noOfSeats);
        // Assert
        expect(result).toBe("");
    });
});