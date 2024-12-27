console.log("This is a program to demonstrate the asynchrouns behaviour of JS");

function sayHello() {
  console.log("I would like to say you hello");
}

setTimeout(() => {
  // it should be executed before the for loop but it didn't
  sayHello();
}, 4000);

for (let index = 0; index < 5; index++) {
  console.log(index);
}
