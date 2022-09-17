const userTypeModel = require("../model/userTypeModel")
module.exports.addUserType = function (req, res) {
    let userTypeName = req.body.userTypeName
    let userTypeId = parseInt(Math.random() * 100000)
    let userType = new userTypeModel(
        {
            "usertypeId": userTypeId,
            "userTypeName": userTypeName
        }
    )
    userType.save(function (err, data) {
        if (err) {
            console.log(err);
            res.json({
                msg: "UserType Not Added",
                status: -1,
                data: "Error..."
            })
        }
        else {
            res.json({
                msg: "User Type Added",
                status: 200,
                data: data
            })
        }
    })
}
// adding a UserType
module.exports.getAllUserTypes = function (req, res) {
    userTypeModel.find(function (err, data) {
        console.log(err);
        if (err) {
            console.log(err);
            res.json({
                msg: "UserType Not Found",
                status: -1,
                data: "SomeThing went wrong"
            })
        }
        else {
            res.json({
                msg: "User Type retrieved",
                status: 200,
                data: data
            })
        }
    })

}
// getting all users
module.exports.updateUsertType = function (req, res) {

    let userTypeId = req.body.userTypeId
    let userTypeName = req.body.userTypeName

    console.log(userTypeId);
    console.log(userTypeName);

    userTypeModel.updateOne({ _id: userTypeId }, { userTypeName: userTypeName }, function (err, data) {
        console.log(err);
        if (err) {
            console.log(err);

            res.json({
                msg: "UserType Not Updated",
                status: -1,
                data: err
            })

        }
        else {
            res.json({
                msg: "User Type Updated",
                status: 200,
                data: data
            })
        }
    })
}
// updating the userType 

module.exports.deleteUserType = function (req, res) {
    let usertypeId = req.body.userTypeId
    userTypeModel.deleteOne({ _id: usertypeId }, function (err, data) {
        console.log(err);
        if (err) {
            res.json({
                msg: "UserType Not deleted",
                status: -1,
                data: err
            })
        }
        else {
            res.json({
                msg: "User Type deleted",
                status: 200,
                data: data
            })
        }
    })

}