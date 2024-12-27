// It is a feature in JS where a function remembers the variables from it lexical scope, even after the outer function is finished
function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
