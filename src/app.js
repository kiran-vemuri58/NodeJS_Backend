//const express = require('express');
import express from 'express';
import dbConnect from './config/database.js';
import User from './models/user.js';

const app = express();

app.use(express.json());


app.post('/signUp', async (req,res)=>{
    const {username,email,password,skills} = req.body;
    console.log(username,email,password)

    if(username && email && password){
      try{
        const user = new User({name:username,email,password,skills});
        const savedUser = await user.save();
        res.status(201).json({message:"User created successfully",data:savedUser});
      }catch(err){
        console.log("Error in user creation:", err);
        return res.status(500).json({error:err});
      }

    }else{
        res.status(400).json({message:"All fields are required"});
    }
})

app.get("/findUser/:emailId", async (req,res)=>{
    const emailId = req.params.emailId;

    try{
        const user = await User.find({email:emailId});
        if(user.length > 0){
            res.status(200).json({message:"User found",data:user});
        }else{
            res.status(404).json({message:"User not found"});
        }
    }catch(err){
        console.log("Error in finding user:", err);
        return res.status(500).json({message:"Internal server error"});
    }
})


export default app;