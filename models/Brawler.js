import mongoose from 'mongoose'

let Schema = mongoose.Schema

const brawlerSchema = new Schema({
    list: [
        {
            id: Number,
            avartarId: Number,
            name: String,
            link: String,
            imgUrl: String,
            class: {
                id: Number,
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

export default mongoose.model('Brawlers', brawlerSchema)