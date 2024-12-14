/* 
1. Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai" 
    Store all teas before "chai" in a new array named 'selectedTea'.
*/

let array = ["green tea", "black tea", "chai", "oolong tea"];

let selectedTea = [];

for (let i = 0; i < array.length; i++) {
  let tea = array[i];
  if (tea === "chai") {
    break;
  }
  selectedTea.push(array[i]);
}

// console.log(selectedTea);

/* 
2. Write a 'for' loop that through the array '["London", "New York", "Paris", "Berlin"]' and skips "Paris".
    Store the other cities in a new array named 'visitedCities'.
*/

let cities = ["London", "New York", "Paris", "Berlin"];

let visitedCities = [];

for (let j = 0; j < cities.length; j++) {
  // if (cities[j] !== "Paris") {
  //   visitedCities.push(cities[j]);
  // }

  if (cities[j] === "paris" || cities[j] === "Paris") {
    continue;
  }
  visitedCities.push(cities[j]);
}
// console.log(visitedCities);

/* 
3. Use a 'for-of' loop to iterate through the array '[1, 2, 3, 4, 5]' and stop when the number '4' is found.
    Store the numbers before '4' in an array named 'smallNumbers'
*/
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

/* 
4. Use a 'for-of' loop to iterarte throungh the array '["chai", "green tea", "herbal tea", "black tea"]' and skip "herbal tea".
    store the other teas in a array named 'preferredTea'
*/
let teas = ["chai", "green tea", "herbal tea", "black tea"];

let preferredTea = [];
// "for-of" loop is used for arrays
for (const tea of teas) {
  if (tea === "herbal tea") {
    continue; // used to skip something
  }
  preferredTea.push(tea);
}
// console.log(preferredTea);

/* 
5. Use a 'for-in' loop to loop through an object containing city populations.
    Stop the loop when the population of '"Berlin" is found and store all previous cities' populations in a new object named 'cityNewPopulations'

    let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
    }
*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityNewPopulations = {};
// console.log(Object.values(citiesPopulation));

// "for-in" is used for Objects
for (const key in citiesPopulation) {
  // console.log(citiesPopulation[key]); // to access an object values
  // key => it will give the key of an object
  if (key == "Berlin") {
    break;
  }
  cityNewPopulations[key] = citiesPopulation[key];
}

// console.log(cityNewPopulations);

/* 
6. Use a 'for-in' loop to loop through an object containing city populations.
  Skip any city with a population below 3 million and store the rest in a new object named 'largeCities'.
  
  let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
  }
*/
let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Paris: 2200000,
  Berlin: 3500000,
};

let largeCities = {};

for (const key in worldCities) {
  // worldCities[key] => it will give the values inside an object
  if (worldCities[key] < 3000000) {
    continue;
  }
  largeCities[key] = worldCities[key];
}

// console.log(largeCities);

/* 
7. Write a 'forEach' loop that iterates through the array '["earl grey", "green tea", "chai", "oolong tea"]'.
  Stop the loop when "chai" is found and store all previous tea types in an array named 'availableTeas'
*/
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];

teaCollection.forEach(function (element) {
  if (element === "chai") {
    return; // to break a function we use return keyword
  }
  availableTeas.push(element);
});

// console.log(availableTeas);

/* 
8. Write a 'forEach' loop that iterates through the array '["Berlin", "Tokyo", "Sydney", "Paris"]'.
  Skip "Sydney" and store the other cities in a new array named 'traveledCities'.
*/
let options = ["Berlin", "Tokyo", "Sydney", "Paris"];

let traveledCities = [];
options.forEach((element) => {
  if (element === "Sydney") {
    return;
  }
  traveledCities.push(element);
});

// console.log(traveledCities);

/* 
9. Write a 'for' loop that iterates through the array '[2, 5, 7, 9]'.
  Skip the value '7' and multiply the rest by 2, Store the results in a array named 'doubledNumbers'.
*/
let number = [2, 5, 7, 9];

let doubledNumbers = [];
for (let i = 0; i < number.length; i++) {
  if (number[i] === 7) {
    // doubledNumbers.push(number[i]);
    continue;
  }
  doubledNumbers.push(number[i] * 2);
}

// console.log(doubledNumbers);

/* 
10. Use a 'for-of' loop to itreate through the array '["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]'.
  and stop when the length of the current tea name is greater than 10.
  Store the teas iterated over in an array namaed 'shortTeas'.
*/
let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

let shortTeas = [];
for (const element of myTeas) {
  if (element.length > 10) {
    break;
  }
  shortTeas.push(element);
}

// console.log(shortTeas);
