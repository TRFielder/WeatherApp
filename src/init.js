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
}

export default init