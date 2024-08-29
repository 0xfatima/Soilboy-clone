import mongoose from "mongoose"

const connectdb= async()=>{
try{
    //added the Product (database name here: nyaaujx.mongodb.net/Products? )
    const connection= await mongoose.connect("mongodb+srv://emaaaa37:DjkqDaEUd46BbFg3@mongodata.nyaaujx.mongodb.net/Products?retryWrites=true&w=majority&appName=MongoData")
    console.log("database connected");
}catch(err){
    console.log("error:");
    console.error(err);

}
}

export default connectdb;