//UI will get initialised here
const content = document.getElementById("content")
const banner = document.getElementById("banner")

function init() {
    const sometext = document.createElement("div")
    sometext.textContent = "This is some placeholder text!"
    banner.appendChild(sometext)
}

export default init