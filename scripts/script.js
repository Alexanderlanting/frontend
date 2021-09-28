// JavaScript Document
menu = document.querySelector("header img:nth-of-type(2)");
headerul = document.querySelector("header ul")


menu.addEventListener("click", ToggleMenu);

function ToggleMenu() {
    headerul.classList.toggle("togglemenu")
};

/* Carousel javascript */

carouselRight = document.querySelector("main > section:nth-of-type(1) > button:nth-of-type(2)");

CarouselLeft = document.querySelector("main > section:nth-of-type(1) > button:nth-of-type(1)");

carousel = document.querySelector("main > section:nth-of-type(1) section");

carouselRight.addEventListener("click", right);
CarouselLeft.addEventListener("click", left);


function right() {
    carousel.classList.add("moveright")
}

function left() {
    carousel.classList.remove("moveright")
}
