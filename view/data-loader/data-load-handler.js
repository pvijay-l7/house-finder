"use strict";

import { data_handler } from "../../global.js";


const input = document.querySelector("input");
const continue_button = document.querySelector("#continue");
const descriptor = document.querySelector("#descriptor")

window.addEventListener("DOMContentLoaded", () => {
    continue_button.disabled = true;
})

input.addEventListener("change", event => {

    // clearing localStorage if wrong file is input after right file

    localStorage.clear();

    const file = event.target.files[0];
    const file_type = file.type;
    const file_size = file.size / 1000;

    if (file_type.includes("csv") || file_type.includes("txt")) {
        // const data_handler = new DataHandler();
        data_handler.load_data(file);
        continue_button.disabled = false;
        descriptor.innerHTML = `File size: ${file_size}kb`
    } else {
        continue_button.disabled = true;
        descriptor.innerHTML = "Incorrect file format. Only <b>.csv</b> or <b>.txt</b> files are accepted"
    }
})

continue_button.addEventListener("click", () => {
    location.replace("..\/home-page\/home-page.html");
})