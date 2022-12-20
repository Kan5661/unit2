import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    active: [
        {
            slot: {
                id: Number,
                name: String
            },
            startTime: Date,
            endTime: Date,
            map: {
                id: Number,
                name: String,
                imageUrl: String,
                credit: String
            },
            gameMode: {
                id: Number,
                name: String
            }
        }
    ],
    upcoming: [
        {
            slot: {
                id: Number,
                name: String
            },
            startTime: Date,
            endTime: Date,
            map: {
                id: Number,
                name: String,
                imageUrl: String,
                credit: String
            },
            gameMode: {
                id: Number,
                name: String
            }
        }
    ]
})

export default mongoose.model('Event', eventSchema)