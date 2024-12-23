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

//// Encapsulation restrict direct access to the data of the object

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

///// Abstrction : hiding the information

class CoffeeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }

  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne} + ${msgTwo}`;
  }
}

let myMachine = new CoffeeMachine();

// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

// console.log(myMachine.pressStartButton());

// /// Polymorphism : the ability of something to have or to be displayed in more than one form

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguin can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

//////// static method : it can't be access directly by making object like other methods in the class

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let minCalc = new Calculator();
// console.log(minCalc.add(2, 3));

// console.log(Calculator.add(2, 3));

// ////   Getters and Setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      console.error("Inavalid Salary");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see the salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Alice", -50000);

// console.log(emp.salary);
emp.salary = -50000;
