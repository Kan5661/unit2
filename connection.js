import mongoose from 'mongoose'

const url = process.env.MONGO_URL || 'mongodb://localhost:27017/brawlstar-api'

mongoose.set('strictQuery', true)
let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(url, mongooseConnectionConfig)

mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))

export default mongoose.connection