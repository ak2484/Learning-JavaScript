// Number

let balance = 121;

let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());
// console.log(anotherBalance);

// console.log(typeof balance);         // number
// console.log(typeof anotherBalance); // object

// Boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

// null and undefined
let firstname;
// console.log(firstname);

let lastname = null;
// console.log(lastname);

// string

let myString = "hello";
let myString1 = "hola";
let username = "Akash";

let oldGreet = myString + " " + "Akash";
// console.log(oldGreet);

// =>use of `` in string and performing
let newGreetMessage = `Helloooo ${username}!`;
// console.log(newGreetMessage);

let demoOne = `Value is ${2 ** 4}`; // we can perform operations too with ``
// console.log(demoOne);

// symbol
let sm1 = Symbol();
let sm2 = Symbol();

// console.log(sm1 == sm2);
