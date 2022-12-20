import mongoose from 'mongoose'

let Schema = mongoose.Schema

const brawlerSchema = new Schema({
    list: [
        {
            id: Number,
            avartarId: Number,
            name: String,
            version: 1,
            link: String,
            imgUrl: String,
            class: {
                id: 1,
                name: String
            },
            rarity: {
                id: Number,
                name: String
            },
            description: String,
            starpowers: [
                {
                    id: Number,
                    name: String,
                    description: String,
                    imgUrl: String
                }
            ],
            gadgets: [
                {
                    id: Number,
                    name: String,
                    description: String,
                    imgUrl: String
                }
            ]
        }
    ]
})