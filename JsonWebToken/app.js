const express = require("express");
require("dotenv").config(); 
const connectDB = require("./config/db");

const app = express();

//middlware to parse the JSON

app.use(express.json())

connectDB()

//routes
app.use("/api", require("./routes/authRoutes"));

// protected route
app.use("/api", require('./routes/protectedRoutes'))

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("server is running"))

