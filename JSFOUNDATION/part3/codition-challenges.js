// Check if a number is greater than another number:

// let num1 = 5;
// let num2 = 8;
// console.log("I am regular upper code");

// if (num1 > num2) {
//   console.log(" num1 is greater than num2");
// } else {
//   console.log(" Nope, num1 is not greater than num2");
// }

// console.log("I am regular bottom code");

// Checking if a string is equal to another string;

let username = "Akash";
let anotherusername = "Aka";

if (username == anotherusername) {
  console.log(" The username exists....");
  console.log("  Pick another username");
} else {
  //   console.log("You can pick this username....");
}

// Checking if a variable is a number or not:
let score = 44;

if (typeof score === "number") {
  //   console.log("Yep, this is a number....");
} else {
  console.log("No that is not a number...");
}

// Checking if a boolean value is true or false

let isTeaReady = false;

if (isTeaReady) {
  //   console.log("The value is true..");
} else {
  //   console.log("The Value is false..");
}

// Checking if an array is empty or not:

let items = ["item1"];

if (items.length === 0) {
  console.log("Array is empty");
} else {
  // console.log("Array is NOT empty");
}

// Ternary Operator
let a = 10;
let b = 10;

a == b ? console.log("both are equal") : console.log("both are not equal");
