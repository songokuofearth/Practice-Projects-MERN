const jwt = require("jsonwebtoken");
const JWT_SECRET = "random";

export default function auth  (req,res,next) {
    const token = req.headers.token;

    if(!token){
        res.json({
            Message : "Invalid User"
        }).status(404);
    }
    else{
        try{
            const decoded = jwt.verify(token,JWT_SECRET);

            req.userId = decoded;
            next();
        }catch{
            res.json({
                message : "Could not verify"
            }).status(404);
            next();
        }
    }
}