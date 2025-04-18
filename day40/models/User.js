
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
    age: {
        type: Number, 
        min: 0

    },
    createdAt: {
        type: Date,
        default: Date.now

    }
});

// create the user model
const User = mongoose.model("User", userSchema);

module.exports = User;