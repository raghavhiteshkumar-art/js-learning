// Primitive Data Types in JavaScript

// String
let name = "Hitesh";
console.log("String:", name, typeof name);

// Number
let age = 25;
let pi = 3.14;
console.log("Number:", age, typeof age);
console.log("Number:", pi, typeof pi);

// BigInt
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber, typeof bigNumber);

// Boolean
let isStudent = true;
let isWorking = false;
console.log("Boolean:", isStudent, typeof isStudent);
console.log("Boolean:", isWorking, typeof isWorking);

// Undefined
let undefinedVar;
console.log("Undefined:", undefinedVar, typeof undefinedVar);

// Symbol
let uniqueId = Symbol('id');
console.log("Symbol:", uniqueId, typeof uniqueId);

// Null
let emptyValue = null;
console.log("Null:", emptyValue, typeof emptyValue); // Note: typeof null returns "object" (this is a known quirk)