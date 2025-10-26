import mongoose from "mongoose";

const dbUrl = 'mongodb+srv://vemurikiranchand007_db_user:U4IMgaU43t41tOH5@userproject.zpxltls.mongodb.net/kiran_node';


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

export default dbConnect;