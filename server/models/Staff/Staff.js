import mongoose from "mongoose"


let staffSchema=new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    }, lastname:{
        type:String,
        require:true
    }, phone:{
        type:String,
        require:true
    }
})

const staffModel=mongoose.model("staff",staffSchema,"staffCollection")
export default staffModel