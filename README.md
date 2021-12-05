# js-cinnamon-cinemas
This is my solution to Cinnamon Cinemas Movie Theatre Seating Challenge.

## Technologies Used
JavaScript and Jest, applying Test-Driven Development.

## Instructions
Fork this repository and clone it into a local directory.

Install jest package:
```javascript
npm install --save-dev jest
```
Run the tests using the following command:
```javascript
npm test
```
## Task
Develop a program to allocate seats to customers purchasing tickets for a movie theatre.

## Features and Assumptions
There are 15 seats in the movie theatre, arranged in 3 rows of 5. Rows are assigned a letter from A to C, seats are assigned a number from 1 to 5.

Customer can request between 1 and 3 seats. The program should allocate the required number of seats from the available seats, starting from A1 and filling the auditorium from left to right, from front to back.

All of the seats are available when program starts. The program should continue to allocate seats until it finds there are not enough seats left to complete the request.
