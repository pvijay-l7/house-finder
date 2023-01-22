"use strict";

import { data_handler, house_finder } from "../../global.js"
import { activate } from "./slider.js";

const content = document.querySelector(".content");
const search_button = document.querySelector("#search");
const reset_button = document.querySelector("#reset");
const descriptor = document.querySelector("#descriptor");

// TODO:
// * 1. On load get the data from the corresponding handler
// * 2. Load the DOM with the content
// * 3. Check filters to display content
// * 4. When search clicked clear the list of houses and load the new ones
// * 5. Validate filter conditions
// * 6. Check if the filter is unchanged for each click

// ! TEMP - change to get filterz
const filter = {
    price: {
        min: 1_500_000,
        max: 5_000_000,
    },
    area: {
        min: 1000,
        max: 6000,
    },
    beds: {
        min: 1,
        max: 10,
    },
    baths: {
        min: 1,
        max: 10,
    },
    age: {
        min: 0,
        max: 1000,
    },
    acres: {
        min: 0,
        max: 20,
    }
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
            <p>Area:${house.area}${house.area_unit}</p>
            <p>Property area:${house.acres}</p>
            <p>Beds:${house.beds}</p>
            <p>Baths:${house.baths}</p>
            </div>`

}

search_button.addEventListener("click", () => {
    content.innerText = "";
    descriptor.innerHTML = "";

    house_finder.filter_house_data(filter).then(houses => {
        const houses_found = houses.length;
        if (houses_found === 0) {
            content.innerHTML = "Oops we couldn't find anything that matched your preferences.";
        } else {
            descriptor.innerHTML = `We found ${houses_found} ${houses_found === 1 ? "property" : "properties"} that match your preference`;
            for (const house of houses) {
                content.insertAdjacentHTML("afterbegin", generate_sub_content(house));
            }
        }

    });
})

reset_button.addEventListener("click", () => {
    const houses = data_handler.get_loaded_data();
    // const houses_found = houses.length;

    content.innerText = "";
    descriptor.innerHTML = ``;


    for (const house of houses) {
        content.insertAdjacentHTML("afterbegin", generate_sub_content(house))
    }
})

window.addEventListener("load", (e) => {
    // !MOVE THIS TO CONTROLLER BRO

    const houses = data_handler.get_loaded_data();

    for (const house of houses) {
        content.insertAdjacentHTML("afterbegin", generate_sub_content(house))
    }
    activate();
})

export { filter }