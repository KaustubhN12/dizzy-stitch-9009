

const mongoose = require("mongoose")

const schema = mongoose.Schema({
    "Title": String,
    "Title_URL": String,
     "Image": String,
    "rating": Number,
    "place": String,
    "Tag": String,
    "price": String,
    "bought": String,
    "originalprice":Number
},{
    versionKey:false
})

const HealthCompanyModel= mongoose.model("healthCompany",schema)

module.exports={
    HealthCompanyModel
}