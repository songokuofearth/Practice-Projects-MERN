const {Router} = require("express")
const adminRouter = Router();

adminRouter.post("/signup",(req,res)=>{
    res.json({
        Message : "admin"
    })
})

adminRouter.post("/signin",(req,res)=>{
    res.json({
        Message : "admin"
    })
})

adminRouter.put("/course",(req,res)=>{
    res.json({
        Message : "admin"
    })
})

adminRouter.get("/course/bulk",(req,res)=>{
    res.json({
        Message : "admin"
    })
})

module.exports = adminRouter;