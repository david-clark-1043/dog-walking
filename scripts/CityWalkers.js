import { getWalkerCities, getCityName } from "./database.js"

// const cities = getCities()

export const getCitiesForWalker = (idOfWalker) => {
    const walkerCities = getWalkerCities()
    let citiesForWalker = []

    for(const walkerCity of walkerCities) {
        if(walkerCity.walkerId === idOfWalker) {
            citiesForWalker.push(walkerCity)
        }
    }

    return citiesForWalker

}



export const buildCityString = (citiesForWalker) => {
    
    let cityArray = []

    for(const walkerCity of citiesForWalker){
        const cityName = getCityName(walkerCity.cityId)
        cityArray.push(`${cityName}`)
    }

    // get string formatted in correct grammar
    let cityString = ""

    const numCities = cityArray.length

    if(numCities === 1) {
        return `${cityArray[0]}`
    } else if(numCities === 2) {
        return `${cityArray[0]} and ${cityArray[1]}`
    } else if(numCities > 2) {
        let lastCity = cityArray[numCities - 1]
        cityArray[numCities - 1] = `and ${lastCity}` 
        for(const city of cityArray) {
            cityString += `${city}, `
        }
        cityString = cityString.slice(0, cityString.length - 2)

        return cityString
    }
    // if cityArray.length === 0 - return error
    return "Error Number of Cities Serviced is Zero."

}