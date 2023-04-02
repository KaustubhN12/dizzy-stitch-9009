const express = require("express")
const {UserModel} = require("../model/user.model")
const approute = express.Router()
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

approute.post("/register",async(req,res)=>{

    const {name,email,password,phone} = req.body

    try{
    const user = await UserModel.find({email})
    let count =0
    for(let k of user){
        if(k.email==email){
          count++
          console.log(k.email,email)
        }
    }
    
    if(count!=0){
        res.status(200).send({"msg":"user is allready registered, please login "})
    }else{   

 
        bcrypt.hash(password, 5 , async(err, hash)=> {
        const newuser = new UserModel({name,email,password:hash,phone})
        await newuser.save()
        res.status(200).send({"msg":"user registerd"})
    });
}

    }catch(err){
       res.status(400).send({"msg":err.message})
    }
    
})



approute.post("/login",async(req,res)=>{

const {email,password} = req.body

try{

    const user = await UserModel.find({email})
    bcrypt.compare(password,user[0].password, async(err,result)=>{
          if(result){
            res.status(200).send({"msg":"user is logged in", "token": jwt.sign({"userID":user[0]._id},"batman"),"user":user})
          }else{
            res.status(400).send({"msg":err.message})
          }
    })


}catch(err){

    res.status(400).send({"msg":err.message})

}



})









module.exports={
    approute
}


