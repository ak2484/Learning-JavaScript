let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

// console.log(car.start());

function Person(name, age) {
  (this.name = name), (this.age = age);
}

let john = new Person("John Doe", 20);
// console.log(john.age);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.akash = function () {
  return `Coustom method ${this}`;
};

let myArray = [1, 2, 3, 4];
// console.log(myArray.akash());

let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.akash());

// Creating a class
class Vehicle {
  //// defining methods inside the class
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

///// Inheritance

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Toyoto", "Corolla");
// console.log(vehOne.make);
