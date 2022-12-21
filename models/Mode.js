import mongoose from 'mongoose'

const modeSchema = new mongoose.Schema({
            id: Number,
            name: String,
            title: String,
            imageUrl1: String
})

export default mongoose.model('Modes', modeSchema)