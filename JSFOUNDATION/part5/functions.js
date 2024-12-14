/* 
1. Write a function named 'makeTea' that take one parameter, 'typeOfTea', and returns a string like '"Making green tea"' when called with '"green tea"'.
    Store the result in a variable named 'teaOrder'.
*/
function makeTea(typeOfTea) {
  // here type is the parameter
  return `Making ${typeOfTea}`;
}

// while calling a function we pass arguements in the functions
let teaOrder = makeTea("green tea");

// console.log(teaOrder);

/* 
2. Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message like "Order confirmed for chai".
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}

// console.log(orderTea("oolong tea"));

/* 
3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'.
    Store the result in a variable named 'totalCost'.
*/
let calculateTotal = (price, quantity) => {
  return price * quantity;
};

let totalCost = calculateTotal(10, 2);

// console.log(totalCost);

/* 
4. Write a function named 'processTeaOrder' that takes another function, 'makeTea', as a parameter and calls it with the argument '"earl grey"'.
    Return the result of calling 'makeTea'
*/

function makeTea(typeOfTea) {
  return `maketea : ${typeOfTea}`;
}

function processTeaOrder(taeFunction) {
  return taeFunction("earl grey");
}

let order = processTeaOrder(makeTea);
// console.log(order);

/* 
5. Write a function named 'createTeaMaker' that returns another function. The returned functions should take one parameter, 'teatype', and return a message like '"Making green tea"'.
    Store the returned function in a variable named 'teaMaker' and call it with '"green tea"'.
*/
// One function (createTeaMaker) returns another function
function createTeaMaker(name) {
  let score = 420;
  return function (teaType) {
    return `Making ${teaType} ${name} ${score}`;
  };
}

let teaMaker = createTeaMaker("Akash");
let result = teaMaker("green tea");
console.log(result);
