// This file retrieves images form NASA API
require("dotenv").config();
console.log(process.env);
const apikey = process.env.API_KEY;
const baseurl = 'https://api.nasa.gov/planetary/apod?api_key=';

// Function that retrieves url for the image of the current day
export const getImageforToday = async () => {
    const response = await fetch (baseurl + apikey);
    const rjson = await response.json();
    let imagedata = rjson.url;
    if (imagedata = undefined) {
        console.log("There is an error with the API key");
    }
    return imagedata;
};

//Function that retrieves url for the image for particular day
export const getImageforDate = async (date) => {
    const response = fetch(baseurl + apikey + '&date=' + date);
    const rjson = await response.json();
    let imagedata = rjson.url;
    if (imagedata = undefined) {
        console.loge("The date entered is not within the time spam of available pictures");
    }
};