//Header menu button toggle:

let menuButton = document.querySelector(".main-dropdown");
let logoLayer = document.querySelector(".logo-container");
let menuLayer = document.querySelector(".menu-layer");
let middleBar = document.querySelector(".middle-bar");
let isClicked = false;

function clickDropMenu() {
    if (isClicked) {
        document.documentElement.style.setProperty("--menu-box-desk-width", "54px");
        document.documentElement.style.setProperty("--menu-box-width", "40.5px");
        document.documentElement.style.setProperty("--menu-bar-desk-width", "30px");
        document.documentElement.style.setProperty("--menu-bar-width", "24px");
        logoLayer.style.visibility = "visible";
        logoLayer.style.opacity = "1";
        menuLayer.style.visibility = "hidden";
        menuLayer.style.opacity = "0";
        isClicked = false;
    }
    else {
        document.documentElement.style.setProperty("--menu-box-desk-width", "100%");
        document.documentElement.style.setProperty("--menu-box-width", "100%");
        document.documentElement.style.setProperty("--menu-bar-desk-width", "20px");
        document.documentElement.style.setProperty("--menu-bar-width", "16px");
        logoLayer.style.opacity = "0";
        logoLayer.style.visibility = "hidden";
        menuLayer.style.opacity = "1";
        menuLayer.style.visibility = "visible";
        isClicked = true;
    }
}

menuButton.addEventListener("click", clickDropMenu);