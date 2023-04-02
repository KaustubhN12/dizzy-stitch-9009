const express = require("express") 
const {connection}=require("./db/db")
const {approute} = require("./routes/user.route")
const {categoryroute} = require("./routes/category.route")
const { RestCompanyRoute} = require("./routes/RestCompany.route")
const { SalonCompanyRoute} = require("./routes/SalonCompany.route")
const { HealthCompanyRoute} = require("./routes/HealthCompany.route")
const {GiftCompanyRoute} = require("./routes/GiftCompany.route")
const {restDealRoute} = require("./routes/RestDeal.route")
const {HealthDealRoute} = require("./routes/HealthDeal.route")
const {SalonDealRoute} = require("./routes/SalonDeal.route")
const {GiftDealRoute} = require("./routes/GiftDeal.route")
const {OrderRoute} = require("./routes/Order.route")
const {adminroute} = require("./routes/Admin.route")
const {middleware} = require("./middleware/middleware")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

app.use("/admin", adminroute)
app.use("/user", approute)
app.use("/category",categoryroute)
app.use("/restaurant", RestCompanyRoute)
app.use("/salon", SalonCompanyRoute)
app.use("/health",  HealthCompanyRoute)
app.use("/gift", GiftCompanyRoute)
app.use("/restDeal", restDealRoute)
app.use("/healthDeal", HealthDealRoute)
app.use("/salonDeal", SalonDealRoute)
app.use("/giftDeal", GiftDealRoute)
app.use(middleware)
app.use("/order", OrderRoute)






app.listen(process.env.port,async()=>{

try{
   await connection
   console.log({"msg":"connected"})
}
catch(err){
    console.log({"msg":"not connected"})
}

})






