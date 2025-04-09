import express from "express";
import connectDB from "./db/connectdb.js";
import { createData } from "./models/Movie.js";
// import { allDocs } from "./models/Movie.js";


const app = express();
const DATABASE_URL  = "mongodb://localhost:27017/7thaug2025"

const port = 6001;
connectDB(DATABASE_URL);

//calling the model createData
createData();

// allDocs("67f3dbc65d7adaa0e44561ec")

// allDocs()



app.listen(port, () => {
    console.log(`Server is running on port number ${port}`)
})