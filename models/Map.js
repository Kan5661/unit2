import mongoose from 'mongoose'

const mapSchema = new mongoose.Schema({
            id: Number,
            name: String,
            imageUrl: String,
            environment: {
                id: Number,
                name: String,
                imageUrl: String
            },
            gamemode: {
                id: Number,
                name: String,
                imageUrl: String
            }
      
})

export default mongoose.model('Maps', mapSchema)