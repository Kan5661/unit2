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

fetch(events)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        fsPromises.writeFile("events.json", JSON.stringify(data))
    })
    .catch((error) => {
        console.error(error)
    })

fetch(maps)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        fsPromises.writeFile("maps.json", JSON.stringify(data))
    })
    .catch((error) => {
        console.error(error)
    })

fetch(modes)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        fsPromises.writeFile("modes.json", JSON.stringify(data))
    })
    .catch((error) => {
        console.error(error)
    })

fetch(icons)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        fsPromises.writeFile("icons.json", JSON.stringify(data))
    })
    .catch((error) => {
        console.error(error)
    })

