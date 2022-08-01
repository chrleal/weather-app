const api = (() => {

function transformData(data){
  const objData = {
    name: data.name,
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity, 
    tempMax: data.main.temp_max, 
    tempMin: data.main.temp_min,
    country: data.sys.country,
    weather: data.weather[0].main,
    windSpeed: data.wind.speed,
  }
  console.log(objData);
  return { objData};
}

async function getData(city){
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c235920f685fe6f408c45380821c79b2`, {mode: 'cors'});
    const cityData = await response.json();
    if (!response.ok) {
      throw new Error('No matching location found!');
    }
    transformData(cityData);
    console.log(cityData);
  } catch(err){
    alert(err);
  }
};

return { getData }

})();

export { api }