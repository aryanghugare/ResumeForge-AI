import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", ()=>{console.log("Database connected successfully")})

        let mongodbURI = process.env.MONGODB_URI;
        const projectName = 'resume-builder';

        if(!mongodbURI){
            throw new ApiError(500, "MONGODB_URI environment variable not set")
        }

        if(mongodbURI.endsWith('/')){
            mongodbURI = mongodbURI.slice(0, -1)
        }

        await mongoose.connect(`${mongodbURI}/${projectName}`)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
            throw new ApiError(500, "Failed to connect to MongoDB", [], error.stack);
    }
}

export default connectDB;