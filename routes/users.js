const express = require('express');
const userroutes = express.Router();

userroutes.post("/signup",(req,res)=>{
    res.json({
        message : "signup endpoint"
    })
})


userroutes.post("/signin",(req,res)=>{
    res.json({
        message : "signin endpoint"
    })
})

userroutes.get("/purchases",(req,res)=>{
    res.json({
        message : "purchases endpoint"
    })
})

module.exports = userroutes;
