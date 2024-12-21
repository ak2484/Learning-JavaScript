let computer = {
  cpu: 12,
};

let lenovo = {
  screen: "HD",
  __proto__: computer, // it will allow lenovo to access the property of computer
};

let tomHardware = {};

console.log(`lenovo`, lenovo.__proto__);

// '__' is called as Dunder
