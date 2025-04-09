const Recipe = require("../models/recipeModel");

//get all the users

// get all the users Get
exports.getAllRecipes = async(req, res) => {
    const recipe = await Recipe.find();
    res.json(recipe)
}


// routes
// create the user (POST)
exports.createRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).json(newRecipe)

    } catch(error){
        res.status(400).json({error: error.message})
    }
};



// get all recipe the user by ID(Put)
exports.getRecipeById = async (req, res) => {
    try {
        const updated = await Recipe.findById(req.params.id);
        res.json(updated)

    } catch(error){
        res.status(400).json({error: error.message})
    }
}


// update the user by ID(Put)
exports.updateRecipe = async (req, res) => {
    try {
        const {id} = req.params;
        const updated = await Recipe.findByIdAndUpdate(id, req.body, {new: true});
        res.json(updated)

    } catch(error){
        res.status(400).json({error: error.message})
    }
}



// delete the user by id

exports.deleteRecipe = async (req, res) => {
    try {
        const {id} = req.params;
        await Recipe.findByIdAndDelete(id);
        res.json({message: "User is deleted successfully"})

    } catch(error){
        res.status(400).json({error: error.message})
    }
}

