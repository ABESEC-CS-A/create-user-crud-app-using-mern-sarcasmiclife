const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const url = process.env.MONGO_URL

const connectDB = async() => {
    try {
        await mongoose.connect(url)
        console.log("MongoDB Connected")
    }
    catch(err) {
        console.log("DB error: ", err.message)
    }
}

module.exports = connectDB