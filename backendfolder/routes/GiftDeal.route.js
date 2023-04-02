

const express = require("express")
const GiftDealRoute = express.Router()
const {GiftDealModel}= require("../model/AllDeals.model")


GiftDealRoute.post("/add",async(req,res)=>{

    try{
       const newcompany = new GiftDealModel(req.body)
       await newcompany.save()
       //await GiftDealModel.insertMany(req.body.restaurants)
       res.status(200).send({"msg":"new company added"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

GiftDealRoute.get("/get",async(req,res)=>{

    try{
       const allcompany = await GiftDealModel.find()
     
       res.status(200).send({"msg":allcompany})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

GiftDealRoute.patch("/update/:id",async(req,res)=>{
    const {id} = req.params
try{
 
  await GiftDealModel.findByIdAndUpdate({_id:id},req.body)
  res.status(200).send({"msg":" company id updated"})


}catch(err){
  res.status(400).send({"msg":err.message})

}
})

GiftDealRoute.delete("/delete/:id",async(req,res)=>{
          const {id} = req.params
    try{
       
        await GiftDealModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":" company id deleted"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

module.exports={
    GiftDealRoute
}
