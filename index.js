const express = require("express")
const app = express();
const userRouter = require("./routes/users")
const courseRouter = require("./routes/course")
const adminRouter = require("./routes/admin")
const mongoose = require("mongoose")


app.use(express.json());

app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/public/index.html")
})

app.use("/users",userRouter);
app.use("/adnin",adminRouter);
app.use("/course",courseRouter);


async function main(){
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.ekgk2.mongodb.net/coursera-db");
console.log("connected");
app.listen(3000);
console.log("Started");

}

main();