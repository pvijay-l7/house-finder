"use strict";

import { house_finder } from "../../global.js"
// import { HouseFinder } from "../../model/HouseFinder.js";

// TODO:
// * 1. On load get the data from the corresponding handler
// * 2. Load the DOM with the content
// * 3. Check filters to display content
// * 4. When search clicked clear the list of houses and load the new ones

const filter = {
    "min_price": 160,
    "max_price": 250,
    "min_area": 0,
    "max_area": 30,
    "min_beds": 0,
    "max_beds": 3,
    "min_baths": 0,
    "max_baths": 4,
    "min_age": 0,
    "max_age": 1000,
    "min_acres": 0,
    "max_acres": 1000,
}

window.addEventListener("load", (e) => {
    // const house_finder = new HouseFinder();
    const filtered_houses = house_finder.filter_house_data(filter);
    console.log(filtered_houses);
})