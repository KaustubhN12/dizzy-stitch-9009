
const express = require("express")
const SalonCompanyRoute = express.Router()
const {SalonCompanyModel}= require("../model/SalonCompany.model")


SalonCompanyRoute.post("/add",async(req,res)=>{

    try{
       const newcompany = new SalonCompanyModel(req.body)
       await newcompany.save()
       //await SalonCompanyModel.insertMany(req.body.salon)
       res.status(200).send({"msg":"new company added"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

SalonCompanyRoute.get("/get",async(req,res)=>{

    const sort = req.query.sort
    const order = req.query.order
    const place = req.query.place
  
    var customsort;
    if(sort=="originalprice"){
     if(order=="asc"){
       customsort={
         "originalprice":1
       }
     }else if(order=="desc"){
         customsort={
             "originalprice":-1
           }
     }
      
    }else if(sort==undefined){
        customsort={}
    }

    var customplace;
    if(place==undefined){
       customplace={}
    }else{
      customplace={
         "place":place
      }
    }

    try{
       const allcompany = await SalonCompanyModel.find(customplace).sort(customsort)
     
       res.status(200).send({"msg":allcompany})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})



SalonCompanyRoute.patch("/update/:id",async(req,res)=>{
    const {id} = req.params
    console.log(id)

try{
 
  await SalonCompanyModel.findByIdAndUpdate({_id:id},req.body)
  res.status(200).send({"msg":" company id updated"})


}catch(err){
    console.log(id)
  res.status(400).send({"msg":err.message})

}
})

SalonCompanyRoute.delete("/delete/:id",async(req,res)=>{
          const {id} = req.params
    try{
       
        await SalonCompanyModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":" company id deleted"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

module.exports={
    SalonCompanyRoute
}
