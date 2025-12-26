/*************************************************
 * 1. VARIABLES & DATA TYPES
 *************************************************/
// Variables
let name = "Pavan"; // String
let age = 22; // Number
let isStudent = true; // Boolean
let city; // Undefined
let value = null; // Null

console.log(name, age, isStudent, city, value);

/*************************************************
 * 2. OPERATORS
 *************************************************/
let a = 10;
let b = 3;
// Arithmetic Operators
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus (remainder)

// Comparison Operators
console.log(a > b); // true
console.log(a === b); // false

// Logical Operators
console.log(a > 5 && b < 5); // AND
console.log(a > 20 || b < 5); // OR

/*************************************************
 * 3. CONDITIONS (if-else, switch)
 *************************************************/

// if-else example
let marks = 75;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// switch example
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid Day");
}

/*************************************************
 * 4. LOOPS (for, while)
 *************************************************/

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}

// while loop
let j = 1;
while (j <= 5) {
  console.log("While Loop:", j);
  j++;
}

/*************************************************
 * 5. COUNT DIGITS IN A NUMBER
 *************************************************/

let num1 = 45872;
let count = 0;

while (num1 > 0) {
  num1 = Math.floor(num1 / 10);
  count++;
}

console.log("Digit Count:", count);

/*************************************************
 * 6. REVERSE A NUMBER
 *************************************************/

let num2 = 1234;
let reverse = 0;

while (num2 > 0) {
  let digit = num2 % 10;
  reverse = reverse * 10 + digit;
  num2 = Math.floor(num2 / 10);
}

console.log("Reversed Number:", reverse);

/*************************************************
 * 7. SUM OF EVEN NUMBERS (1 to n)
 *************************************************/
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("Sum of Even Numbers:", sum);
/* 8. CHECK PRIME NUMBER */
let number = 7;
let isPrime = true;
if (number < 2) {
  isPrime = false;
}
for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Prime Number");
} else {
  console.log("Not a Prime Number");
}
/*9. NUMBER PATTERN */
let rows = 4;
for (let i = 1; i <= rows; i++) {
  let line = "";
 for (let j = 1; j <= i; j++) {
    line += j;
  }
  console.log(line);
}
