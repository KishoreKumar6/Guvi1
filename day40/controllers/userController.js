const User = require("../models/User");

//get all the users

// get all the users Get
exports.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users)
}


// routes
// create the user (POST)
exports.createUser = async (req, res) => {
    try {
        const {name, email, age} = req.body;
        const newUser = new User({name, email, age});
        await newUser.save();
        res.status(201).json(newUser)

    } catch(error){
        res.status(400).json({error: error.message})
    }
};

// update the user by ID(Put)
exports.updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const updated = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.json(updated)

    } catch(error){
        res.status(400).json({error: error.message})
    }
}



// delete the user by id

exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        await User.findByIdAndDelete(id);
        res.json({message: "User is deleted successfully"})

    } catch(error){
        res.status(400).json({error: error.message})
    }
}

