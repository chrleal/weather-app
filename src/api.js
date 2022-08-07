const api = (() => {

  //Puts the required data into an object
  function transformData(data) {
    console.log(data)
    const objData = {
      cityName: data.name,
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      country: data.sys.country,
      weather: data.weather[0].main,
      windSpeed: data.wind.speed,
    };
    return { objData }
  }

  async function getData(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c235920f685fe6f408c45380821c79b2`,
        { mode: "cors" }
      );
      const data = transformData(await response.json());
      if (!response.ok) {
        throw new Error("No matching location found!");
      }
      return data
    } catch (err) {
      alert(err);
      return null
    }
  }

  return { getData };
})();

export { api };
