import express from 'express'
import fetch from 'node-fetch'

const app = express()
app.use(express.json())

const PORT = 3500

app.listen(PORT, () => {
    console.log('listening to port 3500')
})

app.get('/', (req, res) => {
    console.log('hello world')
})