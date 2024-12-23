import express from "express"
import mongoose from "mongoose";
import staffModel from "../../models/Staff/Staff.js";
const router=express.Router()



router.post("/registerallstaff",async (req,res)=>{
    try {
        let userinput=req.body
        console.log(userinput);
        await staffModel.create(userinput)
        res.status(200).json(userinput)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})



router.get("/getallstaff",(req,res)=>{
    try {
        console.log("Get all staff");
        res.status(200).json({msg:"get all staff"})
    } catch (error) {
        console.log(error);
    }
    
    })



router.get("/getonestaff",async (req,res)=>{
    try {
        let staffdb= await staffModel.find({})
        console.log(staffdb);
        res.status(200).json(staffdb)
    } catch (error) {
        console.log(error);
        res.status(500).json ({msg:error})
    }
})

router.put("/updatestaff",async (req,res)=>{
    try {
        let userinput=req.body
    console.log(userinput);
    await staffModel.updateOne({phone:1122},{$set:{name:"mz"}})
    res.status(200).json(userinput)
    } catch (error) {
        console.log(error);
    res.status(500).json({msg:error})
    }
})


router.delete("/deletestaff",async (req,res)=>{
    try {
        let userinput=req.body
    console.log(userinput);
    await staffModel.deleteOne(userinput)
    } catch (error) {
    console.log(error);    
    }
})
export default router