"use strict";

import { DataHandler } from "./controller/DataHandler.js"
import { HouseFinder } from "./model/HouseFinder.js"
// Just to handle global parameters

const local_storage_key = "data";
const data_handler = new DataHandler();
const house_finder = new HouseFinder();

export { local_storage_key, data_handler, house_finder }