import { getCitiesForWalker, buildCityString } from "./CityWalkers.js"
import { getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.targets
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = getCitiesForWalker(parseInt(walkerId))
                    const cities = buildCityString(assignments)
                    window.alert(`${walker.name} services ${cities}`)
                    break;
                }
            }
        }
    }
)

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>` // used walker.fullName instead of walker.name
    }

    walkerHTML += "</ul>"

    return walkerHTML // did not return html string

}

