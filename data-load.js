"use strict";

// TODO:
// ! 1. Read data
// * 2. Process data into -> type string 
// *    1. Parse the data into house objects
// *    2. Store in a list of house objects
// *    3. Store in local storage


class House {
    price_in = 10000;
    price_unit = "inr";
    area_in = 100;
    area_unit = "sq.ft";

    constructor(price, area, beds, baths, age, acres, taxes) {
        this.price = price;
        this.area = area;
        this.beds = beds;
        this.baths = baths;
        this.age = age;
        this.acres = acres;
        this.taxes = taxes;
    }

    get_actual_price() {
        // the price we read is in 10000s so to convert it
        return this.price * this.price_in;
    }

    get_actual_area() {
        // the area we read is in 100s so to convert it
        return this.area * this.area_in;
    }
    // "Price in 10000s","sq.ft in 100s","Beds","Baths","Age","Acres",Taxes
}

const file_input = document.querySelector("input");



file_input.onchange = (event) => {
    const file = event.target.files[0];
    console.log(file);

    const file_reader = new FileReader()

    file_reader.readAsText(file, "UTF-8");

    file_reader.onload = (event => {
        localStorage.setItem("1", event.target.result.trim().split("\n")[0])
        localStorage.setItem("2", event.target.result.trim().split("\n")[1])
    })
}