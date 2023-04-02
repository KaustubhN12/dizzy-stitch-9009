const mongoose = require("mongoose")

const schema = mongoose.Schema({
    "name":String,
    "email":String,
    "password":String,
    "phone":Number,

},{
    versionKey:false
})

const UserModel= mongoose.model("user",schema)
const AdminModel= mongoose.model("admin",schema)

module.exports={
    UserModel,AdminModel
}