const jwt = require("jsonwebtoken");
const JWT_SECRET = "random"
const { AdminModel } = require("../db");
const bcrypt = require("bcrypt")

const postSignup = async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    try{
    const response  = await AdminModel.findOne({
        email : email
    })

    if(!response){
       const hashedPwd =  await bcrypt.hash(password, 10);

        const createUser = await AdminModel.create({
            email : email,
            username :username,
            password : hashedPwd
        })
        res.json({
            Message : "Sign up sucessful"
        })
    }else{
        res.json({
            Message : "user already exists"
        })
    }

    }catch{
    res.json({
        Message : "Unexpected error in Admin Signup "
    })
    }
};

const postSignin = async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try {
        const hashedPwd = await bcrypt.hash(password,10);

        const findUser = await AdminModel.findOne({
            email : email,
            password : hashedPwd,
            username : username
        })

        if(findUser){
            const token = jwt.sign(password,JWT_SECRET);
            res.json({
                token : token
            })
        }else{
            res.json({
                Message : "User not Found please SIgn Up"
            })
        }
    } catch  {
       res.json({
        Message : "Unexpected error in Admin Sign in"
       }) 
    }
}

const putCourse = (req,res)=>{
    res.json({
        Message : "admin"
    })
}

const getCourseBulk = (req,res)=>{
    res.json({
        Message : "admin"
    })
}

module.exports = {
    postSignup,
    postSignin,
    putCourse,
    getCourseBulk
}