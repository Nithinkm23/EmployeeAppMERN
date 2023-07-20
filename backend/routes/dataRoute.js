const express = require('express')
const router = express.Router();
const employeeData = require('../model/employeeData')

router.use(express.json());
router.use(express.urlencoded({ extended: true }))

//VIEW ALL POST

router.get('/viewall', async (req, res) => {

    try {
        const data = await employeeData.find()
        res.send(data);
    }
    catch (error) {
        res.status(400).json(error.message)

    }
})

//ADD POST

router.post('/addpost', (req, res) => {
    try {
        const item = req.body;
        const newdata = new employeeData(item)
        
                    newdata.save();
                    res.json({ message: "Post added successfully!" })
                

    } catch (error) {
        console.log(error)
        res.json({ message: "Unable to Post!" })

    }
})

//DELETE POST

router.delete("/delete/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        console.log(postId)
        await employeeData.findByIdAndDelete(postId);
        res.json({ message: "Deleted Successfully" })
    } catch (error) {
        console.log(error);
        res.status(400).json('Unable to delete')
    }
});

router.put("/edit/:id", async (req, res) => {
    try {

        console.log(req.body)
        const postId = req.params.id;
        console.log(postId)
        await employeeData.findByIdAndUpdate(postId, req.body)
        res.json({ message: "Updated Successfully!" })
    } catch (error) {
        console.log(error.message)
        res.status(400).json("Unable to Update!")
    }
});

module.exports = router;   