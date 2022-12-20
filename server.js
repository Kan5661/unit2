import express from 'express'
import fetch from 'node-fetch'
import mongoose from 'mongoose'
import connection from './connection.js'
import Brawler from './models/Brawler.js'
import Mode from './models/Mode.js'
import Event from './models/Event.js'
import Map from './models/Map.js'

const app = express()
app.use(express.json())

const PORT = 3400

app.listen(PORT, () => {
    console.log('listening to port 3500')
})

app.get('/', (req, res) => {
    res.send('hello world')
})

// GET
app.get('/brawlers', async (req, res) => {
    res.json(await Brawler.find({}))
})
app.get('/modes', async (req, res) => {
    res.json(await Mode.find({}))
})
app.get('/events', async (req, res) => {
    res.json(await Event.find({}))
})
app.get('/maps', async (req, res) => {
    res.json(await Map.find({}))
})