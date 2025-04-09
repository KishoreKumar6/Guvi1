const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


// register a new user

exports.register = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        // check if the user already exists
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg: "User is already exists"})
        }
        
        // create the new user

        user = new User({name, email, password})

        // hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        //save the user
        await user.save();

        // lgoin...username, password....jWT -> userinfo --> from Fe to Be

        //create and return jwt token

        const payload = { user: {id: user._id, name: user.name}};
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"})
        res.json({token})


    } catch(error) {
        console.log(error.message);
        res.status(500).send("server error")

    }
}

// login user


exports.login = async (req, res) => {
    const {email, password} = req.body;

    try {
        // find user
        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({msg: "Not valid please register or use valid cred"})
        }

        // match pwd
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({msg: "Please enter valid pwd"})
        }

        //sign the jwt and return
        const payload = { user: {id: user._id, name: user.name}};
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"})
        res.json({token})


    } catch(error) {
        console.log(error.message);
        res.status(500).send("server error")

    }
}
