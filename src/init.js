//UI will get initialised here
import "./style.css";
import "./index.js"
import buildForecast from "./index.js";


function init() {
    //Put the search bar in the top
    const banner = document.createElement("div")
    banner.setAttribute("id","banner")
    //COntainer for search bar
    const searchbox = document.createElement("div")
    searchbox.setAttribute("id", "searchBox")

    const searchInput = document.createElement("input")
    searchInput.setAttribute("type","text")
    searchInput.setAttribute("id", "searchInput")
    searchbox.appendChild(searchInput)

    const searchBtn = document.createElement("button")
    searchBtn.setAttribute("id", "searchBtn")
    searchBtn.textContent = "Go";
    searchbox.appendChild(searchBtn)

    document.body.appendChild(banner)
    banner.appendChild(searchbox)

    //Add event listener for clicking on the search button
    searchBtn.addEventListener("click", function(){
        buildForecast();
    })

    //Add location display
    const location = document.createElement("div")
    location.className = "location-display"
    location.setAttribute("id", "location-display")
    banner.appendChild(location)
    location.textContent = "Weather for Hampton, GB"

    populateUI();
}

function populateUI() {
    

    //This forecast div will contain five more divs, which will show the forecast for each day
    const forecast = document.createElement("div");
    forecast.setAttribute("id", "forecastbox");

    for(let i=0; i<=4; i++) {
        let forecastDiv = document.createElement("div");
        forecastDiv.className ="forecast-display";
        forecastDiv.setAttribute("id", `forecast${i}`);
        forecastDiv.textContent = `This is forecast div #${i}`;
        forecast.appendChild(forecastDiv);
    }
    document.body.appendChild(forecast);    
}

export default init