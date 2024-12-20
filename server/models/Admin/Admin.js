import mongoose from "mongoose"
const adminSchema=new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },lastname:{
        type:String,
        require:true
    },phone:{
        type:String,
        require:true
    }
})

const adminModel=mongoose.model("admin",adminSchema,"adminCollection")

export default adminModel