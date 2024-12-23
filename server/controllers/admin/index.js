import express from "express";
import adminModel from "../../models/Admin/Admin.js";
import userModel from "../../models/Users/Users.js";
const router = express.Router();



router.post("/registeralladmin", async(req, res) => {
  try {
    let userinput = req.body;
    console.log(userinput);
    await adminModel.create(userinput)
    res.status(200).json(userinput);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});





router.get("/getalladmin", (req, res) => {
    try {
      console.log("get all admins");
      res.status(200).json({ msg: "get all admins" });
    } catch (error) {
      console.log(error);
    }
  });
  
  router.get("/getoneadmin",async (req,res)=>{
  try {
      let admin=await adminModel.find({})
      console.log(admin);
      res.status(200).json({msg:admin})
  } catch (error) {
      console.log(error);
      res.status(500).json({msg:error})
  
    }
  })  
router.put("/updateadmin",async (req,res)=>{
  try {
    let userinput=req.body
    console.log(userinput);
    await adminModel.updateOne({phone:2233},{$set:{phone:"100"}})
    res.status(200).json(userinput)
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:error})
  }
})
  router.delete("/deleteadmin",async  (req,res)=>{
    try {
      let userinput=req.body
      console.log(userinput)
      await userModel.delete()
      res.status(200).json(userinput)
    } catch (error) {
      console.log(error);
    }
  })

  export default router;


