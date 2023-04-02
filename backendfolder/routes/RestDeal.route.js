
const express = require("express")
const restDealRoute = express.Router()
const {RestDealModel}= require("../model/AllDeals.model")


restDealRoute.post("/add",async(req,res)=>{

    try{
       const newcompany = new RestDealModel(req.body)
       await newcompany.save()
       //await RestDealModel.insertMany(req.body.restuarantDeals)
       res.status(200).send({"msg":"new company added"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

restDealRoute.get("/get",async(req,res)=>{

    try{
       const allcompany = await RestDealModel.find()
     
       res.status(200).send({"msg":allcompany})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

restDealRoute.patch("/update/:id",async(req,res)=>{
    const {id} = req.params
try{
 
  await RestDealModel.findByIdAndUpdate({_id:id},req.body)
  res.status(200).send({"msg":" company id updated"})


}catch(err){
  res.status(400).send({"msg":err.message})

}
})

restDealRoute.delete("/delete/:id",async(req,res)=>{
          const {id} = req.params
    try{
       
        await RestDealModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":" company id deleted"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

module.exports={
    restDealRoute
}
