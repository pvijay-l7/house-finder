"use strict";

const file_input = document.querySelector("input");

file_input.onchange = (event) => {
    console.log(event.target.files[0]);

    const file_reader = new FileReader();

}

const a = () => {
    console.log("usd");
}

const pi = 3.1415

export { a, pi }