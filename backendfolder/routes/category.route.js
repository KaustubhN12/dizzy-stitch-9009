
const express = require("express")
const categoryroute = express.Router()
const {CategoryModel}= require("../model/category.model")


categoryroute.post("/add",async(req,res)=>{

    try{
       const newcategory = new CategoryModel(req.body)
       await newcategory.save()
       res.status(200).send({"msg":"new category added"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

categoryroute.get("/get",async(req,res)=>{

    try{
       const allcategory = await CategoryModel.find()
     
       res.status(200).send({"msg":allcategory})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

categoryroute.delete("/delete/:id",async(req,res)=>{
          const {id} = req.params
    try{
       
        await CategoryModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":" category id deleted"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

module.exports={
    categoryroute
}