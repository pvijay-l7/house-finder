"use strict";

// NEED TO CHECK TYPE OF INPUT FILE

import { DataHandler } from "../../controller/DataHandler.js";

document.querySelector("input").onchange = (event) => {
    const file = event.target.files[0];

    console.log(file.type);

    const data_handler = new DataHandler();
    data_handler.load_data(file);
    // data_handler.print_data();
}