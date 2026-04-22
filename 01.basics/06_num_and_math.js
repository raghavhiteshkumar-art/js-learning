const score = 1200;
console.log(score); // Output: 1200

const balance = new Number(1000);
console.log(balance); // Output: [Number: 1000]
console.log(balance.toString().length); // Output: 4
console.log(balance.toFixed(2)); // Output: "1000.00"
console.log(balance.valueOf()); // Output: 1000

const otherNumber = 233.14159;
console.log(otherNumber.toFixed(2)); // Output: "233.14"
console.log(otherNumber.toExponential(2)); // Output: "2.33e+2"
console.log(otherNumber.toPrecision(5)); // Output: "233.14"

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // Output: 1,000,000

const num1 = 10;
const num2 = 3;

console.log(num1 + num2); // Output: 13
console.log(num1 - num2); // Output: 7
console.log(num1 * num2); // Output: 30
console.log(num1 / num2); // Output: 3.3333333333333335
console.log(num1 % num2); // Output: 1
console.log(num1 ** num2); // Output: 1000

console.log(Math.PI);