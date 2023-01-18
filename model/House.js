"use strict";
class House {
    price_in = 10000;
    price_unit = "inr";
    area_in = 100;
    area_unit = "sq.ft";

    constructor(price, area, beds, baths, age, acres, taxes) {
        this.price = Number(price);
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

export { House }