const mongoose = require('mongoose')
const userTypeSchema = new mongoose.Schema({
    usertypeId:{
        type:Number,
        required:true
    },
    userTypeName:{
        type:String
    }
})

module.exports = mongoose.model("UserType",userTypeSchema)