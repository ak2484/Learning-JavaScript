let computer = {
  cpu: 12,
  ram: 16,
};

let lenovo = {
  screen: "HD",
  __proto__: computer, // it will allow lenovo to access the property of computer
};

let tomHardware = {};
console.log(`lenovo`, lenovo.__proto__);

// '__' is called as Dunder

///// if you don't want to use the __proto__ then you can to it as follows
let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla`, Object.getPrototypeOf(tesla));
// console.log(tesla.hasOwnProperty("driver")); // it rturns a boolean value

tesla.mode = "electric";
