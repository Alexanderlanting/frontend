// JavaScript Document
menu = document.querySelector ("header img:nth-of-type(2)"); 
headerul = document.querySelector ("header ul")


menu.addEventListener ("click", ToggleMenu);

function ToggleMenu() {
headerul.classList.toggle("togglemenu")
}