import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'

const brawlers = "https://api.brawlapi.com/v1/brawlers"
const events = 'https://api.brawlapi.com/v1/events'
const maps = 'https://api.brawlapi.com/v1/maps'
const modes = 'https://api.brawlapi.com/v1/gamemodes'
const icons = 'https://api.brawlapi.com/v1/icons'

fetch(brawlers)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        fsPromises.writeFile("brawlers.json", JSON.stringify(data))
    })
    .catch((error) => {
        console.error(error)
    })

