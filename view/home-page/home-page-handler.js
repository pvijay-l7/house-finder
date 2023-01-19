"use strict";

import { data_handler, house_finder } from "../../global.js"

const content = document.querySelector(".content");
const search_button = document.querySelector("#search");

// TODO:
// * 1. On load get the data from the corresponding handler
// * 2. Load the DOM with the content
// * 3. Check filters to display content
// * 4. When search clicked clear the list of houses and load the new ones
// * 5. Validate filter conditions
// * 6. Check if the filter is unchanged for each click

// ! TEMP - change to get filter
const filter = {
    "min_price": 1_500_000,
    "max_price": 3_000_000,
    "min_area": 1500,
    "max_area": 3000,
    "min_beds": 0,
    "max_beds": 4,
    "min_baths": 0,
    "max_baths": 3,
    "min_age": 0,
    "max_age": 1000,
    "min_acres": 0,
    "max_acres": 1000,
}

const get_random_backdrop = () => {
    // get a random backdrop for each item
    const backdrops = ["backdrop-1", "backdrop-2", "backdrop-3"];
    const random_index = Math.ceil(Math.random() * 3) - 1;
    return backdrops[random_index];
}

const parse_price = (house_price) => {
    // returns a comma seperated money rep for readability
    const price = ("" + house_price).split("");

    for (let i = price.length - 3; i > 0; i -= 3) {
        price.splice(i, 0, ",");
    }

    return price.join("");

}

const generate_sub_content = (house) => {
    const currency_unit = "$";
    return `<div class="sub-content">
            <div class="image ${get_random_backdrop()}">
                <div class="age-display">
                    <p class="age">${house.age}yrs</p>
                </div>
            </div>
            <p>Price:${currency_unit}${parse_price(house.price)}</p>
            <p>Area:${house.area}sq.ft</p>
            <p>Property area:${house.acres}</p>
            <p>Beds:${house.beds}</p>
            <p>Baths:${house.baths}</p>
            </div>`

}

search_button.addEventListener("click", () => {
    content.innerText = "";
    console.log(filter);

    house_finder.filter_house_data(filter).then(houses => {
        console.log(houses);
        const houses_found = houses.length;
        if (houses_found === 0) {
            content.innerHTML = "Oops we couldn't find anything that matched your preferences.";
        } else {
            content.insertAdjacentText("beforebegin", `We found ${houses_found} properties that match your preference`)
            for (const house of houses) {
                content.insertAdjacentHTML("afterbegin", generate_sub_content(house));
            }
        }

    });
})

window.addEventListener("load", (e) => {
    // !MOVE THIS TO CONTROLLER BRO

    console.log(JSON.parse(localStorage.getItem("data")));

    const houses = data_handler.get_loaded_data();

    for (const house of houses) {
        content.insertAdjacentHTML("afterbegin", generate_sub_content(house))
    }
})