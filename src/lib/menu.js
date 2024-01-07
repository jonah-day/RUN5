//Header menu button toggle:

let menuButton = document.querySelector(".main-dropdown");
let logoLayer = document.querySelector(".logo-container");
let menuLayer = document.querySelector(".menu-layer");
let isClicked = false;

function clickDropMenu() {
    if (isClicked) {
        document.documentElement.style.setProperty("--menu-box-width", "54px");
        logoLayer.style.visibility = "visible";
        logoLayer.style.opacity = "1";
        menuLayer.style.visibility = "hidden";
        menuLayer.style.opacity = "0";
        isClicked = false;
    }
    else {
        document.documentElement.style.setProperty("--menu-box-width", "100%");
        logoLayer.style.opacity = "0";
        logoLayer.style.visibility = "hidden";
        menuLayer.style.opacity = "1";
        menuLayer.style.visibility = "visible";
        isClicked = true;
    }
}

menuButton.addEventListener("click", clickDropMenu);