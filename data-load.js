"use strict";

import { DataHandler } from "./DataHandler.js";

document.querySelector("input").onchange = (event) => {
    const file = event.target.files[0];
    new DataHandler().load_data(file);
}