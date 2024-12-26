const person = {
  name: "Akash",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

const animal = {
  name: "Ayyan",
};

person.greet();

const greetFunction = person.greet;
greetFunction();

// The Bind() Method creates a "new function" and when that new function is called it set "this" keyword to the "first argument" which is passed to the bind method,

const boundGreet = person.greet.bind({ name: "Hitesh" }); //we can specify name to refer
// const boundGreet = person.greet.bind(animal); // we can refer the object for the name
boundGreet();

// call and apply

// The Call() Method calls the function directly and sets "this" to the first argument passed to the call method. NOTE: The call method doesn’t return a new function.

let nameObj = {
  name: "Tony",
};

let PrintName = {
  name: "steve",
  myAge(age) {
    console.log(this.name + " age is " + age);
  },
  myScore(...score) {
    console.log(this.name + " score is " + score);
  },
};
PrintName.myAge(22);

PrintName.myAge.call(nameObj, 42); // it will refer the name from the object and age from the argument passed in the call

// Note : In the apply method, we pass arguments in the form of an array this is only the primary difference between call and apply.

PrintName.myScore.apply(nameObj, [80, 75, 100, 95]);
PrintName.myScore.apply(nameObj, [42]);
