import Brawler from "../models/Brawler.js"
import Map from "../models/Map.js"
import Event from "../models/Event.js"
import Mode from "../models/Mode.js"
import mongoose from "mongoose"
import connection from "../connection.js"
import brawlerData from './brawlers.json' assert { type: 'json'}
import eventData from './events.json' assert { type: 'json'}
import mapData from './maps.json' assert { type: 'json'}
import modeData from './modes.json' assert { type: 'json'}

async function deleteCollections() {
    await Brawler.deleteMany({})
    await Map.deleteMany({})
    await Event.deleteMany({})
    await Mode.deleteMany({})
}

async function createCollections() {
    await Brawler.create(brawlerData)
    await Event.create(eventData)
    await Map.create(mapData)
    await Mode.create(modeData)
}

await deleteCollections()
await createCollections()
mongoose.disconnect()