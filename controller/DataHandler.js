"use strict";
import { local_storage_key } from "../global.js";
import { House } from "../model/House.js";

/**
 * Handles what bruv
 * Should handle loading data
 * Should save data into local storage
 * Should retrieve data 
 * @param house
 * @function load_data
*/
class DataHandler {
    // should house be private
    houses = [];

    load_data(file) {
        const file_reader = new FileReader();
        file_reader.readAsText(file, "UTF-8");

        file_reader.onload = process => {
            const loaded_data = process.target.result.trim().replace("\r", "").split("\n");
            for (const data of loaded_data) {
                const [price, area, beds, baths, age, acres, taxes] = data.trim().replace("\r", "").split(",");
                const house = new House(price, area, beds, baths, age, acres, taxes);
                this.houses.push(house)
            }

            this.houses.shift();
            localStorage.setItem("data", JSON.stringify(this.houses));
        };
    }

    get_loaded_data() {
        const house_data = JSON.parse(localStorage.getItem(local_storage_key) || '[]');
        return house_data;
    }

    // ! FIND A WAY TO GET MAX AND MIN OF ALL THE FIELDS

}

export { DataHandler }