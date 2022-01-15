//Note: This publicly visible API key is specifically expected
//See here for the explanation https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/weather-app#api-keys-secrets-and-security
const key = "875f6ecb3e3a2b867951e413711e4de1" //The openweather API key.
const units = "metric";

const weatherObj = function(main, temp, feelslike, rainchance, wind) {
    this.main = main;
    this.temp = temp;
    this.feelslike = feelslike;
    this.rainchance = rainchance;
    this.wind = wind;
    return{main, temp, feelslike, rainchance, wind};
}

function getcurrentWeatherURL(location) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=${units}`
}

function getForecastURL(latitude, longitude) {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=${units}&appid=${key}`
}

async function requestWeather(url) {
    let response = await fetch(url);
    let weatherData = await response.json();
    return weatherData;
}



export {
    weatherObj,
    getcurrentWeatherURL,
    getForecastURL,
    requestWeather,
};