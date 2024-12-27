// Promises has three phases
// 1. Pending
// 2. Fulfilled
// 3. Rejected
function fetchData() {
  // Promise Creation : they are created using a "new" keyword and takes one callback as parameter/argument
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching the data");
      }
    }, 3000);
  });
}

// Consuming the Promise

fetchData()
  .then((data) => {
    // resolve ka output "then" mai aayega
    console.log(data);
    return "Move On";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    // reject ka output "catch" mai aayega
    console.error(error);
    console.log("Catched");
  });
