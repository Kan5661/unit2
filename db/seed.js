import Brawler from "../models/Brawler.js"
import Map from "../models/Map.js"
import Mode from "../models/Mode.js"
import mongoose from "mongoose"
import connection from "../connection.js"
import brawlerData from './brawlers.json' assert { type: 'json'}
import mapData from './maps.json' assert { type: 'json'}
import modeData from './modes.json' assert { type: 'json'}

async function deleteCollections() {
    await Brawler.deleteMany({})
    await Map.deleteMany({})
    await Mode.deleteMany({})
}

async function createCollections() {
    await Brawler.create(brawlerData.list)
    await Map.create(mapData.list)
    await Mode.create(modeData.list)
}

await deleteCollections()
await createCollections()
mongoose.disconnect()