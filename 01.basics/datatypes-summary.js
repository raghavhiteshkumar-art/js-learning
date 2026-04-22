 //Primitive data types
  //String
  //Number
  //Boolean
  //Null
  //Undefined
  //Symbol
  //BigInt
  
//Non-primitive data types  
    //Object
    //Array
    //Function
    //Date
    //RegExp
    //Error

//Reference data types
    //Object
    //Array
    //Function
    //Date
    //RegExp
    //Error

const score = 100; //Number
const name = "John"; //String
const isActive = true; //Boolean
const age = null; //Null
let address; //Undefined
const id = Symbol("id"); //Symbol
const bigNumber = 1234567890123456789012345678901234567890n; //BigInt

const person = { name: "Alice", age: 30 }; //Object
const numbers = [1, 2, 3, 4, 5]; //Array
function greet() { console.log("Hello!"); } //Function
const today = new Date(); //Date
const regex = /abc/; //RegExp
const error = new Error("Something went wrong!"); //Error

console.log(typeof score); // "number"
console.log(typeof name); // "string"
console.log(typeof isActive); // "boolean"
console.log(typeof age); // "object" (null is considered an object in JavaScript)
console.log(typeof address); // "undefined"
console.log(typeof id); // "symbol"
console.log(typeof bigNumber); // "bigint"

console.log(typeof person); // "object"
console.log(typeof numbers); // "object" (arrays are also considered objects)
console.log(typeof greet); // "function"
console.log(typeof today); // "object"
console.log(typeof regex); // "object"
console.log(typeof error); // "object"  