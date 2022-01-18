import { getCities } from "./database.js"

const cities = getCities()


export const CityList = () => {
    //needs to be unordered list
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}














/* Code pre-Chapter 6

import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const CityList = () => {
    //needs to be unordered list
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li>${walker.city}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

*/