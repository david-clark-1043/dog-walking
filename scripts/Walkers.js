import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li>${walker.name}</li>` // used walker.fullName instead of walker.name
    }

    walkerHTML += "</ul>"

    return walkerHTML // did not return html string

}

