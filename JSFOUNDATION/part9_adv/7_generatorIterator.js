// the generator function remember that how many time we have clled the function*
function* numberGenerator() {
  // this is the waay of writing the generator function.
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();

const genTwo = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // undefined as the function donot know what to return

console.log(genTwo.next().value);
console.log(genTwo.next().value);
