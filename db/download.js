import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'

const brawlers = "https://api.brawlapi.com/v1/brawlers"
const events = 'https://api.brawlapi.com/v1/events'
const maps = 'https://api.brawlapi.com/v1/maps'
const modes = 'https://api.brawlapi.com/v1/gamemodes'


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

fetch(events)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        fsPromises.writeFile("../models/events.json", JSON.stringify(data))
    })
    .catch((error) => {
        console.error(error)
    })

fetch(maps)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        fsPromises.writeFile("../models/maps.json", JSON.stringify(data))
    })
    .catch((error) => {
        console.error(error)
    })

fetch(modes)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        fsPromises.writeFile("../models/modes.json", JSON.stringify(data))
    })
    .catch((error) => {
        console.error(error)
    })

