

const express = require("express")
const OrderRoute = express.Router()
const jwt = require("jsonwebtoken")
const {OrderModel}= require("../model/AllDeals.model")


OrderRoute.post("/add",async(req,res)=>{

    try{
    //    const newcompany = new OrderModel(req.body)
    //    await newcompany.save()
       await OrderModel.insertMany(req.body.user)
       res.status(200).send({"msg":"new Order added"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

OrderRoute.get("/get",async(req,res)=>{
      
    const token = req.headers.authorization


    try{
      if(token){
       
        const decoded = jwt.verify(token,"batman")
        if(decoded){
            const allcompany = await OrderModel.find({userID:decoded.userID})
            res.status(200).send({"msg":allcompany})
        }else{
            res.status(400).send({"msg":"userID is not found"})
        }

      }else{
        res.status(400).send({"msg":"token is not found"})
      }

    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})


module.exports={
    OrderRoute
}
