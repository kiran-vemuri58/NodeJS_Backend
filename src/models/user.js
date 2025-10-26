import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,trim:true},
    password:{type:String,required:true},
    skills:{type:[String],default:[]},
    createdAt:{type:Date,default:Date.now},
},{
    collections:'users',
});

const User  = mongoose.model('User',userSchema);

export default User;