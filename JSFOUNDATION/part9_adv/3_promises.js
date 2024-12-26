function fetchData() {
  // Promise Creation
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
