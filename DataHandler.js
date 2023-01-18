"use strict";
// ! MODAL

/*
* Should handle loading data
* Should save data into local storage
*/

class DataHandler {
    constructor() {
        this.file;
    }

    set_file(file) {
        this.file = file;
    }

    print_data() {
        console.log(this.file);
    }
}

export { DataHandler }