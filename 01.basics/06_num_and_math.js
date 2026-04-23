//const score = 1200;
//console.log(score); // Output: 1200

//const balance = new Number(1000);
//console.log(balance); // Output: [Number: 1000]
//console.log(balance.toString().length); // Output: 4
//console.log(balance.toFixed(2)); // Output: "1000.00"
//console.log(balance.valueOf()); // Output: 1000

//const otherNumber = 233.14159;
//console.log(otherNumber.toFixed(2)); // Output: "233.14"
//console.log(otherNumber.toExponential(2)); // Output: "2.33e+2"
//console.log(otherNumber.toPrecision(5)); // Output: "233.14"

// const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN')); // Output: 1,000,000

// const num1 = 10;
//const num2 = 3;

//console.log(num1 + num2); // Output: 13
//console.log(num1 - num2); // Output: 7
//console.log(num1 * num2); // Output: 30
//console.log(num1 / num2); // Output: 3.3333333333333335
//console.log(num1 % num2); // Output: 1
//console.log(num1 ** num2); // Output: 1000

//console.log(Math.PI);


//+++++++++++++++++++++++++++++++Math Object+++++++++++++++++++++++++++++++
//console.log(Math); // Output: [Math: Math]
//console.log(Math.abs(-5)); // Output: 5
//console.log(Math.round(4.7)); // Output: 5
//console.log(Math.floor(4.7)); // Output: 4
//console.log(Math.ceil(4.2)); // Output: 5
//console.log(Math.trunc(4.9)); // Output: 4
//console.log(Math.sqrt(16)); // Output: 4  
//console.log(Math.pow(2, 3)); // Output: 8
//console.log(Math.max(10, 20, 5)); // Output: 20
//console.log(Math.min(10, 20, 5)); // Output: 5
//c



console.log(Math.random()); // Output: A random number between 0 and 1
console.log((Math.random() * 10) + 1); // Output: A random number between 1 and 100
console.log(Math.floor(Math.random() * 10) + 1); // Output: A random number between 1 and 10

const min = 10;
const max = 20;

//Note: The output of Math.random() will be different each time you run the code, as it generates a random number.
//console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: A random number between min and max

console.log(Math.floor(Math.random() * (max - min + 1)) + min);