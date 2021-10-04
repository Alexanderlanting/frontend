/* easter egg */

logo = document.querySelector("#logo")
main = document.querySelector("main")

logo.addEventListener("dblclick", easter);

function easter() {
    main.classList.toggle("easter");
}
