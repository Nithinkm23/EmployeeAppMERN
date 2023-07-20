const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    
    username: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const userData = mongoose.model('userDatabase', userSchema)
module.exports = userData;