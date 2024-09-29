const express = require('express');
const userroutes = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "random";
const authMiddleware = require("../middlewares/auth");
const userController = require("../controllers/userController")

userroutes.post("/signup",userController.postSignup)


userroutes.post("/signin",authMiddleware,userController.postSignin)

userroutes.get("/purchases",authMiddleware,userController.purchases)

module.exports = userroutes;
