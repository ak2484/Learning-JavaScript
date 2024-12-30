document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");

  const getWeatherBtn = document.getElementById("get-weather-btn");

  const weatherInfo = document.getElementById("weather-info");

  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "3217f3aedd8da22b054f58d3f23f10d6"; //env variable
  getWeatherBtn.addEventListener("click", async () => {
    let city = cityInput.value.trim();
    if (city === "") return;

    // it may through an error
    // server/database is always in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    // gets the data

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error("City Not found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    // diaplay
    console.log(data);
    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temprature : ${main.temp}`;
    descriptionDisplay.textContent = `Description : ${weather[0].description}`;

    // unlock the display
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
