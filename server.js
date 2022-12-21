import express from 'express'
import fetch from 'node-fetch'
import mongoose, { Model } from 'mongoose'
import connection from './connection.js'
import Brawler from './models/Brawler.js'
import Mode from './models/Mode.js'
import Map from './models/Map.js'
import path from 'path'

const __dirname = path.resolve(path.dirname(''))
const app = express()
app.use(express.static('public'))
app.use(express.json())

const PORT = 3400

app.listen(PORT, () => {
    console.log('listening to port 3400')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'documentation.html'));
})

// GET
app.get('/brawlers', async (req, res) => {
    res.json(await Brawler.find({}))
})
app.get('/modes', async (req, res) => {
    res.json(await Mode.find({}))
})
app.get('/maps', async (req, res) => {
    res.json(await Map.find({}))
})

// POST 
app.post('/maps', async (req, res) => {
    res.json(await Map.findOneAndUpdate(
        {},
        { $push: {list: req.body}}
    ))
})

app.post('/modes', async (req, res) => {
    res.json(await Mode.findOneAndUpdate(
        {},
        { $push: {upcoming: req.body}}
    ))
})
app.post('/brawlers', async (req, res) => {
    res.json(await Brawler.findOneAndUpdate(
        {},
        { $push: {list: req.body}}
    ))
})

// DELETE

app.delete('/maps/:id',  async (req, res) => {
    await Map.findOneAndDelete(
        { _id: req.params.id }
    )
    res.json(await Map.find({}))
})
app.delete('/brawlers/:id',  async (req, res) => {
    await Brawler.findOneAndDelete(
        { _id: req.params.id }
    )
    res.json(await Brawler.find({}))
})
app.delete('/mode/:id',  async (req, res) => {
    await Model.findOneAndDelete(
        { _id: req.params.id }
    )
    res.json(await Mode.find({}))
})
