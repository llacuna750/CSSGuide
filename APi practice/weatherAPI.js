const weatherAPI =
  "hsttp://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=0d3d6bd7107ed4c69a2e617d568bfe56";

fetch(weatherAPI)
  .then((response) => {
    if (!response.ok) {
      console.log("wow");
      throw new Error("Your Weather API is invalid / can't reach!");
    }

    return response.json();
  })
  .then((data) => console.log(typeof data))
  .catch((err) => console.log("Error Message:", err.message));






async function getWeatherAPI(param) {
  try {
    const response = await fetch(param);
  
    if (!response.ok) throw new Error("Weather API can't API!");
  
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error mess:',error.message)
  }
}

getWeatherAPI(weatherAPI)