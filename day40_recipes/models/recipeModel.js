
const mongoose = require("mongoose"); 

// define the user schema
const recipeSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    ingredients: {
        type: [String], 
        required: true,
    },
    instructions: {
        type: String, 
        required: true,

    },
    createdAt: {
        type: Date,
        default: Date.now

    }
});

// create the recipe model
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;