//// Objects
// Creating an object
let username = {
  firstName: "Akash",
  isloggedIn: true,
  "full name": "Akash A. Nahak",
};

// Accessing the values of an object
username.firstName = "Mr. Ak"; // changing the values of an object

username.lastName = "Nahak"; // adding more values into an object

// console.log(username.firstName);
// console.log(username.lastName);
// console.log(username["full name"]); // for accessing the keys with space between them

// console.log(typeof username);
// console.log(username);

////Array
//Creating an array
let anotherUser = ["Akash", true, "Nahak"];

//Accessing the values of an array
// console.log(anotherUser[2]);

let isValue = "2abc";
console.log(Number(isValue)); //NaN
console.log(typeof Number(null)); // 0

console.log(Number(undefined)); //NaN => Not an Number
