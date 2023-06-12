function displayTemperature(response) {
  console.log(response);

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "ea011et20fa37354b09b96e56b43o2f3";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=ea011et20fa37354b09b96e56b43o2f3&units=metric";
axios.get(apiUrl).then(displayTemperature);
