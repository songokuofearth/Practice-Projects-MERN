const mongoose = require("mongoose");


const schema = mongoose.Schema;
const objectID = schema.ObjectId;

const Users = new schema({
    email :{type: String, unique : true},
    password : String,
    firstName : String,
    lastName : String
    
})

const Admin = new schema({
    email :{type: String, unique : true},
    password : String,
    firstName : String,
    lastName : String
    
})

const course =  new schema({
    title :String,
    description : String,
    price : Number,
    imageUrl : String,
    creatorId : objectID
})

const purchase = new schema({
    
    courseId : objectID,
    userID : objectID
})

const UserModel = mongoose.model("users",Users);
const AdminModel = mongoose.model("admin",Admin);
const CourseModel = mongoose.model("course",course);
const PurchaseModel = mongoose.model("purchase",purchase);


module.exports = {
    UserModel : UserModel,
    AdminModel : AdminModel,
    CourseModel : CourseModel,
    PurchaseModel : PurchaseModel
}