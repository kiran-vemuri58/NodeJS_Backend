import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

const dbUrl = process.env.MONGO_URI;

const dbConnect = async () => {
    try{
        const conn = await mongoose.connect(dbUrl, {
        });
        console.log(`Database connected: ${conn.connection.host}`);
    }catch(err){
        console.log("Database connection error:", err);
        process.exit(1);
    }
}

//new code

export default dbConnect;