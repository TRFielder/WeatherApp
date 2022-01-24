import * as weatherFunc from "./weather.js";
import init from "./init.js";


async function buildForecast(firstLoad = false) {

    let cityname;
    let countrycode;
    //Get the user selected location from the search box, unless this was the first load
    const input = document.getElementById("searchbox");
    if(firstLoad) {
        cityname = "Hampton";
        countrycode = "GB";
    }
    else {
        cityname = input.value;
        countrycode = "GB";
    }

    //Build the URL to find the city's coordinates
    const coordURL = weatherFunc.getcurrentWeatherURL(cityname, countrycode)
    //Make a call to the current weather API to get coordinates
    const coordinates = await weatherFunc.requestWeather(coordURL)

    const latitude = coordinates.coord.lat;
    const longitude = coordinates.coord.lon;
    //Extract location for display in banner
    let updateLoc = coordinates.name;
    let updateCountry = coordinates.sys.country;

    updateBanner(updateLoc, updateCountry);
    
    //Now request the daily forecast from the One Call API using the obtained coordinates
    const forecastURL = weatherFunc.getForecastURL(latitude, longitude);    
    let theweather = await weatherFunc.requestWeather(forecastURL);
    console.log(theweather);

    //Construct daily weather object array (main, temp, feelslike, rainchance, wind)
    let fiveDayForecast = [];

    for (let i = 0; i <= 4; i++) {
        console.log(theweather.daily[i].weather[0].icon)
        
        fiveDayForecast[i] = new weatherFunc.weatherObj(
            theweather.daily[i].weather[0].main,
            weatherFunc.getIcon(weatherFunc.getIconURL(theweather.daily[i].weather[0].icon)),
            theweather.daily[i].temp.day,
            theweather.daily[i].feels_like.day,
            theweather.daily[i].pop
        )
    }
    displayForecast(fiveDayForecast);
}

function displayForecast(weather) {
    

    //Loop through the forecast divs updating with weather
    for(let i = 0; i <= 4; i++) {
        
        const forecastDiv = document.getElementById(`forecast${i}`);
        //Remove pre-existing child nodes
        while(forecastDiv.firstChild) {
            forecastDiv.removeChild(forecastDiv.firstChild);
        }

        const main = document.createElement("div");
        main.textContent = weather[i].main;
        forecastDiv.appendChild(main);

        const img = document.createElement("img");
        img.src = weather[i].icon;
        forecastDiv.appendChild(img);

        const temp = document.createElement("div");
        temp.textContent = `${weather[i].temp} °C`;
        forecastDiv.appendChild(temp);

        const feelslike = document.createElement("div");
        feelslike.textContent = `Feels like: ${weather[i].feelslike} °C`;
        forecastDiv.appendChild(feelslike);

        const rainchance = document.createElement("div");
        rainchance.textContent = `Chance of rain: ${weather[i].rainchance}%`;
        forecastDiv.appendChild(rainchance);
    }

}

function updateBanner(location, country) {
    const locationDiv = document.getElementById("location-display");
    locationDiv.textContent = `Weather for ${location}, ${country}`;    
}

init();
buildForecast(true);

export default buildForecast