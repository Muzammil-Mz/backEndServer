import mongoose from "mongoose"

let userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    }, lastname:{
        type:String,
        require:true
    },phone :{
        type:String,
        require:true
    }
})

let userModel=mongoose.model("users",userSchema,"UserCollection")
export default userModel