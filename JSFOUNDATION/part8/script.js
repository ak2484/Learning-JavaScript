// example-1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is been changed";
  });

// example-2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let firstCity = document.getElementById("citiesList").firstElementChild;

    firstCity.classList.add("highlight"); // by "add" we can add a class to the elements of the web page
  });

// example-3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeType = document.getElementById("coffeeType");

  coffeType.textContent = "Espresso";
  coffeType.style.background = "brown";
  coffeType.style.padding = "5px";
});

// example-4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// example-5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");

    taskList.lastElementChild.remove();
  });

// example-6
document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("Chai alert");
});

// example-7
document.getElementById("teaList").addEventListener("click", function (event) {
  // "event.target" will give us the information about the element we clicked
  if (event.target && event.target.matches(".teaItem")) {
    alert(`You selected ${event.target.textContent}`);
  }
});

// example-8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;

    let feedbackDisplay = document.getElementById("feedbackDisplay");

    feedbackDisplay.textContent = `Feedback is : ${feedback}`;
  });

//  example-9
document.addEventListener("DOMContentLoaded", function () {
  alert("DOM is Loaded");
  document.getElementById("domStatus").textContent = "DOM fully Loaded";
});

// example-10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight"); //will toggle the highlight for thr paragraph
  });
