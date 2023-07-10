const numbers = [4, 2, 8, 6, 7, 5];

// using with function
const doubleIt = number => number * 2;
const squareIt = number => number * number;

const double = numbers.map(doubleIt);
console.log(double);

const square = numbers.map(squareIt);
console.log(square);

// without Function
const double2 = numbers.map(x => x * 2);
console.log(double2);

const square2 = numbers.map(x => x * x)
console.log(square2);