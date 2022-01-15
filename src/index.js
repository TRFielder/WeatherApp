import "./style.css";
import * as API from "./weather.js";

const cityname = "Hampton"; //Temporary whilst building API calls
const theURL = API.getRequestURL("Southampton");

async function getWeatherData(theURL) {
    const weatherData = await API.requestWeather(theURL);
    console.log(weatherData);
    console.log(`The weather in ${cityname} right now is ${weatherData.weather[0].main}`);
}

getWeatherData(theURL);