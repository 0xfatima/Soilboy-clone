import mongoose from "mongoose";

const prodSchema= new mongoose.Schema(
   { name: { type: String, required: true },
   description: { type: String, required: true },
   duration:{ type: String, required: false },
   time:{ type: String, required: false },
   location:{ type: String, required: false },
   quantity: { type: Number, required: false },
   thumbnail: { type: String, required: true },
    type:{ type: String, required: true },
    price:{ type: String, required: true },
    image1:{ type: String, required: false },
    image2:{ type: String, required: false },
    image3:{ type: String, required: false },
    size:{ type: String, required: false }
}
)


const prodModel= mongoose.model("Product",prodSchema)

export {prodModel}