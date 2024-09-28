const express = require("express");
const courseroutes = express.Router();

courseroutes.post("/purchase",(req,res)=>{
    res.json({
        message : "course purchase endpoint"
    })
})

courseroutes.get("/preview",(req,res)=>{
    res.json({
        message : "courses endpoint"
    })
})
module.exports = courseroutes;
