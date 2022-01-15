//Note: This publicly visible API key is specifically expected
//See here for the explanation https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/weather-app#api-keys-secrets-and-security
const key = "875f6ecb3e3a2b867951e413711e4de1" //The openweather API key.
const cityname = "Hampton"; //Temporary whilst building API calls

function getRequestURL(location) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
}

async function requestWeather(url) {
    const response = await fetch(url);
    const weatherData = await response.json();
    return weatherData;
}

export {
    getRequestURL,
    requestWeather,
};