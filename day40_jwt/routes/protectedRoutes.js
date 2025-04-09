const express = require("express");
const router = express.Router();
const auth = require('../middleware/authMiddlware')


router.get('/dashboard', auth, (req, res) => {
    res.json({
        message: "welcome to the admin user",
        user: req.user // {id, name}
    })
})




module.exports = router;