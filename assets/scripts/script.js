"use strict";

document.querySelectorAll(".accordion__option").forEach(elem =>
    elem.addEventListener("click", () => elem.classList.toggle("accordion__option_active")));

document.querySelectorAll(".cities").forEach(elem =>
    elem.addEventListener("onclick", () => elem.classList.toggle("cities_active")));

function chooseCity(elem) {
    document.querySelectorAll(".cities").forEach(elem =>
        elem.addEventListener("click", () => elem.classList.add("cities_selected")));

    let content = elem.innerHTML;
    console.log('content: ', content);
    document.querySelector(".cities__text").innerHTML = content;
}

document.querySelectorAll(".cities__elem").forEach(elem => {
    elem.addEventListener("click", () => chooseCity(elem));
});