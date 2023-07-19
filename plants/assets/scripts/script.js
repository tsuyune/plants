"use strict";

/* Service menu*/

document.querySelectorAll(".service__button").forEach(serviceButton =>
    serviceButton.addEventListener("click", () => {
        document.querySelectorAll(".service__button").forEach(serviceButton => {
            serviceButton.classList.remove("button_active");
        });
        serviceButton.classList.add("button_active");

        document.querySelectorAll(".card").forEach(elem => {
            let title = elem.querySelector(".service__title").innerHTML.replace("Garden", "Gardens");
            if (!title.includes(serviceButton.innerHTML)) {
                elem.classList.add("card_inactive");
            }
            else elem.classList.remove("card_inactive");
        });
    }));

/* Dropdown of cities
On click adds class with styles, changes city in text of button to selected city in the list*/
const chooseCity = elem => {
    let citiesDict = [{
            city: "Yonkers, NY",
            phone: "+19146780003",
            address: "511 Warburton Ave"
        },
        {
            city: "Canandaigua, NY",
            phone: "+15853930001",
            address: "151 Charlotte Street"
        },
        {
            city: "Sherrill, NY",
            phone: "+12124560002",
            address: "14 WEST Noyes BLVD"
        },
        {
            city: "New York City",
            phone: "+19146780003",
            address: "9 East 91st Street"
        }
    ];

    document.querySelector(".info").classList.add("info_opened");

    document.querySelectorAll(".cities").forEach(elem =>
        elem.addEventListener("click", () => elem.classList.add("cities_selected")));

    let content = elem.innerHTML;
    document.querySelector(".cities__text").innerHTML = content;

    console.log(citiesDict.filter(x => x.city === content));

    let selectedCity = citiesDict.filter(x => x.city === content);
    console.log(selectedCity[0]);
    console.log(selectedCity[0].phone);
    document.querySelector(".info__place").innerHTML = selectedCity[0].city;
    document.querySelector(".info__phone").innerHTML = selectedCity[0].phone;
    document.querySelector(".info__address").innerHTML = selectedCity[0].address;

    document.querySelector(".info__button").href = `tel:${selectedCity[0].phone}`;
}

document.querySelectorAll(".cities").forEach(elem =>
    elem.addEventListener("onclick", () => elem.classList.toggle("cities_active")));

document.querySelectorAll(".cities__elem").forEach(elem =>
    elem.addEventListener("click", () => chooseCity(elem)));

/* Burger menu*/
function openBurgerMenu() {
    document.querySelector(".nav__burger").classList.toggle("nav__burger_active");
}

document.querySelectorAll(".container__burger").forEach(elem =>
    elem.addEventListener("click", () => openBurgerMenu()));

document.querySelectorAll(".nav__elem").forEach(elem =>
    elem.addEventListener("click", () => document.querySelector(".nav__burger").classList.remove("nav__burger_active")));

/* Accordion */
document.querySelectorAll(".accordion__option").forEach(elem =>
    elem.addEventListener("click", () => {
        let isActive = elem.classList.contains("accordion__option_active");
        document.querySelectorAll(".accordion__option").forEach(element => {
            element.classList.remove("accordion__option_active");
        });
        if (!isActive) {
            elem.classList.add("accordion__option_active");
        }
    }));