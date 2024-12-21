import express from "express"
import config from "config"
import "./utils/dbConnect.js"

import adminRouter from "./controllers/admin/index.js"
import staffRouter from "./controllers/staff/index.js"
import usersRouter from "./controllers/users/index.js"


const app=express()
const port=config.get("PORT")
app.use(express.json())

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"Hello World"})
    } catch (error) {
        console.log(error);
    }
}) 


app.use("/api/admin",adminRouter)
app.use("/api/staff",staffRouter)
app.use("/api/users",usersRouter)
app.listen(port,()=>{
    console.log("Server is up and listening");
})