import { api } from "./api";

const dom = (() => {
  const headingContainer = document.querySelector('.heading-container');
  const tempContainer = document.querySelector('.temp-container');
  const tempContent = document.querySelector('.temp-content');
  const searchLocation = document.querySelector(".search-location");
  const submit = document.querySelector("#submitBtn");

  (function eventHandlers(){
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      resetDisplay();
      submitCity();
    });
    
    //When the user presses enter, clicks the submit button
    searchLocation.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit.click();
      }
    });
  })();
  
  // Validates text input
  function validateInput() {
    if (searchLocation.value != "") {
      return true;
    } else {
      return false;
    }
  }

  // Submit form
  async function submitCity() {
    if (validateInput() == true) {
      const weatherData = await api.getData(searchLocation.value);
      displayWeather(weatherData);
      console.log(weatherData);
    } else if (validateInput() == false){
      searchLocation.reportValidity();
    }
  }

  // Display weather conditions
  function displayWeather(weatherData){

    const location = document.createElement('h2');
    location.textContent = weatherData.objData.cityName;
    headingContainer.appendChild(location);

    const condition = document.createElement('h3');
    condition.textContent = weatherData.objData.weather;
    headingContainer.appendChild(condition);

    const temperature = document.createElement('p');
    temperature.classList.add('temp');
    temperature.textContent = weatherData.objData.temp;
    tempContent.appendChild(temperature);

    const celsius = document.createElement('p');
    celsius.classList.add('celsius');
    celsius.textContent = `ºC  `;
    tempContent.appendChild(celsius);

    tempContainer.classList.remove('hidden');
  }

  function resetDisplay(){
    headingContainer.innerHTML = '';
    tempContent.innerHTML = '';
    tempContainer.classList.add('hidden');
  }

  // Fetch a chosen data on first access
  (async function displayFirst() {
    const firstData = await api.getData("São Paulo");
    displayWeather(firstData);
  })();

  return {submitCity}
})();



export { dom };
