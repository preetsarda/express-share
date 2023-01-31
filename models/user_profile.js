const mongoose=require("mongoose");
const{Schema,model}=mongoose;
const userprofileSchema=new Schema({
    email:String,
    firstname:String,
    lastname:String,
    phone:String,
    college:String,
    gender:String,
    branch:String,
    studentID:String,
    occupation:String,
    organization:String
})
const userprofile=new model('userprofile',userprofileSchema);
module.exports(userprofile);