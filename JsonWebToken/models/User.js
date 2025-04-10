
const mongoose = require("mongoose"); 

// define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now

    }
});

// create the user model
const User = mongoose.model("User", userSchema);

module.exports = User;