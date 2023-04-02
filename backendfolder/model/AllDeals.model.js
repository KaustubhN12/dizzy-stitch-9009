const mongoose = require("mongoose")

const schema = mongoose.Schema({
            "Title": String,
            "bought": String,
            "discount": String,
            "cancellation": String,
            "originalprice":String,
            "offerprice": String,
            "taxes": String,
            "validpeople":String,
            "validdate":String,
            "timings": String,
            "count":Number,
            "price":Number,
            "userID":String
},{
    versionKey:false
})

const RestDealModel= mongoose.model("restDeals",schema)

const HealthDealModel= mongoose.model("healthDeals",schema)

const SalonDealModel= mongoose.model("salonDeals",schema)

const GiftDealModel= mongoose.model("giftDeals",schema)

const OrderModel= mongoose.model("order",schema)

module.exports={
    RestDealModel, HealthDealModel, SalonDealModel, GiftDealModel, OrderModel
}