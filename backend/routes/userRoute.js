const express = require('express')
const userData = require('../model/userData')
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }))

//LOGIN API
router.post('/login', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    const user = await userData.findOne({ username: username })

    if (!user) {
        res.json({ message: "User not found !!" })
    }
    try {
        if (user.password == password) {
            res.json({ message: "Login success!!" })
        }
        else {
            res.json({ message: "Login Failed!!" })
        }
    }
    catch (error) {
        console.log(error)
    }
})
module.exports = router;