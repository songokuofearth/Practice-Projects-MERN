const express = require("express")
const app = express();
const userRouter = require("./routes/users")
const courseRouter = require("./routes/course")
const adminRouter = require("./routes/admin")

app.use(express.json());

app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/public/index.html")
})

app.use("/users",userRouter);
app.use("/adnin",adminRouter);
app.use("/course",courseRouter);

app.listen(3000);