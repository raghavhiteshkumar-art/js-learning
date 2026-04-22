const name = "John";
const repoCount = 42;

// String concatenation
//const message1 = "Hello, " + name + "! You have " + repoCount + " repositories.";

// Template literals
console.log(`hello world my name is ${name} and i have and my repo count is ${repoCount} repositories`);

const gameName = new String("Chess");
console.log(gameName[0]); // Output: "C"
console.log(gameName.__proto__)
console.log(gameName.length); // Output: 5
console.log(gameName.toUpperCase()); // Output: "CHESS"
console.log(gameName.charAt(0)); // Output: "C"
console.log(gameName.indexOf("s")); // Output: 3
console.log(gameName.slice(0, 5)); // Output: "Chess"
console.log(gameName.trim()); // Output: "Chess"

const newStringone = "   Hello, World!   ";
console.log(newStringone);
console.log(newStringone.trim()); // Output: "Hello, World!"

const url = "https://www.example20%.com/raghav";

console.log(url.replace("20%", "30%")); // Output: "https://www.example30%.com/raghav"

console.log(url.includes("raghav")); // Output: true

