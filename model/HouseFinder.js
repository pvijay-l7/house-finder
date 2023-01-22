"use strict";

import { data_handler } from "../global.js";

class HouseFinder {
    async filter_house_data(filter) {
        const matched_houses = [];
        const data = data_handler.get_loaded_data();

        for (const house of data) {
            if (this.match_filter(house, filter)) {
                matched_houses.push(house);
            }
        }

        return matched_houses;
    }

    match_filter(house, filter) {
        let is_match = 0;
        // if all 6 conditions are met then return true else false
        // if house matches filter return true else false

        if (house.price <= filter.price.max && house.price >= filter.price.min) {
            is_match++;
        }

        if (house.area <= filter.area.max && house.area >= filter.area.min) {
            is_match++;
        }

        if (house.beds <= filter.beds.max && house.beds >= filter.beds.min) {
            is_match++;
        }

        if (house.baths <= filter.baths.max && house.baths >= filter.baths.min) {
            is_match++;
        }

        if (house.age <= filter.age.max && house.age >= filter.age.min) {
            is_match++;
        }

        if (house.acres <= filter.acres.max && house.acres >= filter.acres.min) {
            is_match++;
        }


        return is_match === 6;
    }
}
export { HouseFinder }