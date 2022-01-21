//UI will get initialised here
import "./style.css";
import "./index.js"
import buildForecast from "./index.js";

function init() {
    //Put the search bar in the top
    const banner = document.createElement("div")
    banner.textContent = "Location"
    banner.setAttribute("id","banner")
    //The actual search box
    const searchInput = document.createElement("input")
    searchInput.setAttribute("type","text")
    searchInput.setAttribute("id", "searchbox")
    banner.appendChild(searchInput)
    const searchBtn = document.createElement("button")
    searchBtn.setAttribute("id", "searchBtn")
    searchBtn.textContent = "Go";
    banner.appendChild(searchBtn)
    document.body.appendChild(banner)

    //Add event listener
    searchBtn.addEventListener("click", function(){
        buildForecast();
    })
    populateUI();
}

function populateUI() {
    //This div will contain five more divs, which will show the forecast for each day
    const forecast = document.createElement("div");
    forecast.setAttribute("id", "forecastbox");

    for(let i=0; i<=4; i++) {
        let forecastDiv = document.createElement("div");
        forecastDiv.className ="forecast-display";
        forecastDiv.textContent = `This is forecast div #${i}`;
        forecast.appendChild(forecastDiv);
    }
    document.body.appendChild(forecast);    
}

export default init