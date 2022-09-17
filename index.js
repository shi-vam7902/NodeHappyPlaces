const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
// All Enteries of Controller are as follow
const userTypeController = require('./controller/userTypeController')

// implmenting crud 
app.post("/userType",userTypeController.addUserType)
app.get("/userType",userTypeController.getAllUserTypes)
app.put("/userType",userTypeController.updateUsertType)
app.delete("/userType",userTypeController.deleteUserType)
//config
mongoose.connect("mongodb://localhost/happyplaces", function (error) {
    if (error) {
        console.log("Data Base Connection Failed");
    }
    else {
        console.log("DataBase Connected");
    }
})

app.listen(9090, function (err) {
    if (err) {
        console.log(err);
        console.log("someThing Went Wron0g");

    }
    else {
        console.log("Server Started at 9090");
    }
})// server connection

