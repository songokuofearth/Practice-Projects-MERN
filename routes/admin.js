const {Router} = require("express")
const adminRouter = Router();
const { AdminModel } = require("../db")
const jwt = require("jsonwebtoken");
const JWT_SECRET = "random";
const authMiddleware = require("../middlewares/auth")
const adminController = require("../controllers/adminController")

adminRouter.post("/signup",adminController.postSignup)

adminRouter.post("/signin",authMiddleware,adminController.postSignin)

adminRouter.put("/course",authMiddleware,adminController.putCourse)

adminRouter.get("/course/bulk",authMiddleware,adminController.getCourseBulk)

module.exports = adminRouter;