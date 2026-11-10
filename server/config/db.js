import mongoose from "mongoose";

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoBD connected successfully")
    }
    catch(error){
        console.error("MongoDB connection failed:", error);
        throw error
    }
}

export default connectDB;