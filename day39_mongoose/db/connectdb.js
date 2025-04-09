import mongoose from "mongoose";

const connectDB = (DATABASE_URL) => {
    mongoose.connect(DATABASE_URL);
    console.log("Database is connected successfully")
}

export default connectDB


