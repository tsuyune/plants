"use strict";

function chooseCity(elem) {
    document.querySelectorAll(".cities").forEach(elem =>
        elem.addEventListener("click", () => elem.classList.add("cities_selected")));

    let content = elem.innerHTML;
    console.log('content: ', content);
    document.querySelector(".cities__text").innerHTML = content;
}

function openBurgerMenu() {
    document.querySelector(".nav__burger").classList.toggle("nav__burger_active");
}

document.querySelectorAll(".accordion__option").forEach(elem =>
    elem.addEventListener("click", () => elem.classList.toggle("accordion__option_active")));

document.querySelectorAll(".cities").forEach(elem =>
    elem.addEventListener("onclick", () => elem.classList.toggle("cities_active")));

document.querySelectorAll(".cities__elem").forEach(elem => {
    elem.addEventListener("click", () => chooseCity(elem));
});

document.querySelectorAll(".container__burger").forEach(elem =>
    elem.addEventListener("click", () => openBurgerMenu()));

document.querySelectorAll(".nav__elem").forEach(elem =>
    elem.addEventListener("click", () => document.querySelector(".nav__burger").classList.remove("nav__burger_active")));