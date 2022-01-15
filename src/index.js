import * as weatherFunc from "./weather.js";
import init from "./init.js";

async function buildForecast() {

    //Get the user selected location from the search box
    const input = document.getElementById("searchbox")
    const cityname = input.value;

    //Build the URL to find the city's coordinates
    const coordURL = weatherFunc.getcurrentWeatherURL(cityname)
    //Make a call to the current weather API to get coordinates
    const coordinates = await weatherFunc.requestWeather(coordURL)
    const latitude = coordinates.coord.lat;
    const longitude = coordinates.coord.lon;
    
    //Now request the daily forecast from the One Call API using the obtained coordinates
    const forecastURL = weatherFunc.getForecastURL(latitude, longitude);    
    let theweather = await weatherFunc.requestWeather(forecastURL);

    //Construct daily weather object array (main, temp, feelslike, rainchance, wind)
    let fiveDayForecast = [];

    for (let i = 0; i <= 4; i++) {
        fiveDayForecast[i] = new weatherFunc.weatherObj(
            theweather.daily[i].weather[0].main,
            theweather.daily[i].temp.day,
            theweather.daily[i].feels_like.day,
            theweather.daily[i].wind_speed,
            theweather.daily[i].pop
        )
        console.log(`Forecast for day ${i}`)
        console.log(fiveDayForecast[i])
    }
}

init();

export default buildForecast