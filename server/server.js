import express from "express"
import connectdb from "./db.js";
import { prodModel } from "./models/products.js";
import cors from "cors"
const app= express();
const port=3000;
app.use(cors())
app.use(express.json())
connectdb();

app.get("/data", async(req,res)=>{
    try{
        const {name}=req.query
        if(name){
           const product = await prodModel.findOne({name});
           if(product){
            res.json({product})
           }else{
            res.status(404).json({error:"product not found"})
           }

        }else{
            const response= await prodModel.find();
            res.json({products:response})
        }
    }catch(error){
        res.status(500).json({error: "internal server error"})
    }
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})