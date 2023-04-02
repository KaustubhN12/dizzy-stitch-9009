
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    "img":String,
    "title":String

},{
    versionKey:false
})

const CategoryModel = mongoose.model("category",schema)

module.exports={
    CategoryModel
}