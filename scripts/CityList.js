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

