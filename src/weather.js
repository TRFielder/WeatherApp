//Note: This publicly visible API key is specifically expected
//See here for the explanation https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/weather-app#api-keys-secrets-and-security
const key = "875f6ecb3e3a2b867951e413711e4de1" //The openweather API key.
const units = "metric";

const weatherObj = function(main, icon, temp, feelslike, rainchance) {
    this.main = main;
    this.icon = icon;
    this.temp = temp;
    this.feelslike = feelslike;
    this.rainchance = rainchance;
    return{main, temp, feelslike, rainchance};
}

function getcurrentWeatherURL(location, countrycode) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${location},${countrycode}&appid=${key}&units=${units}`
}

function getForecastURL(latitude, longitude) {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=${units}&appid=${key}`
}

function getIconURL(code) {
    return `http://openweathermap.org/img/wn/${code}@2x.png`
}

async function requestWeather(url) {
    let response = await fetch(url, {mode: "cors"});
    let weatherData = await response.json();
    return weatherData;
}

async function getIcon(url) {
    let response = await fetch(url, {mode: "cors"});
    let icon = await response;
    return icon
}



export {
    weatherObj,
    getcurrentWeatherURL,
    getForecastURL,
    getIconURL,
    getIcon,
    requestWeather,
};