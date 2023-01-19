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

        if (house.price <= filter.max_price && house.price >= filter.min_price) {
            is_match++;
        }

        if (house.area <= filter.max_area && house.area >= filter.min_area) {
            is_match++;
        }

        if (house.beds <= filter.max_beds && house.beds >= filter.min_beds) {
            is_match++;
        }

        if (house.baths <= filter.max_baths && house.baths >= filter.min_baths) {
            is_match++;
        }

        if (house.age <= filter.max_age && house.age >= filter.min_age) {
            is_match++;
        }

        if (house.acres <= filter.max_acres && house.acres >= filter.min_acres) {
            is_match++;
        }


        return is_match === 6;
    }
}
export { HouseFinder }  