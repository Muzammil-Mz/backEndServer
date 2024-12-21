import express from "express"
import mongoose from "mongoose"
import userModel from "../../models/Users/Users.js"
const router=express.Router() 

router.post("/registerusers",async (req,res)=>{
    try {
        let userinput=req.body
        console.log(userinput);
        await userModel.create(userinput)
        res.status(200).json(userinput)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
          
    }
    })



router.get("/getallusers",(req,res)=>{
    try {
        res.status(200).json({msg:"get all users"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})



router.get("/getoneuser",async (req,res)=>{
    try {
    let userDB=await userModel.find({})
    console.log(userDB);
    res.status(200).json(userDB)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})




router.put("/edituser",async (req,res)=>{
    try {
        let userinput=req.body
        console.log(userinput);
        let edituser=await userModel.updateOne({firstname:"samid"},{$set:{phone:"0987654321"}})
        //updateOne data has to be fetched firsly firstname is unique from the db 
        console.log(edituser);
        res.status(200).json({msg:"update successfull"})
    } catch (error) {
        console.log(error);
    }res.status(500).json({msg:error})
})

router.delete("/deleteuser",async (req,res)=>{
    try {
        let userData = req.body
        console.log(userData);
        await userModel.deleteOne(userData)
        res.status(200).json({msg: "deleted ok"})
    } catch (error) {
        console.log(error);
    }
})

router.delete("/deleteusers",async (req,res)=>{
    try {
        let userData = req.body
        console.log(userData);
        await userModel.deleteMany()
        res.status(200).json({msg: "deleted ok"})
    } catch (error) {
        console.log(error);
    }
})


export default router