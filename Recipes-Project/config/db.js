
const mongoose = require("mongoose"); //mongoose to connect to the mongodb
require("dotenv").config(); 


const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("mongodb connected successfully"))
    .catch((err) => console.log("connection failure"))
}

module.exports = connectDB