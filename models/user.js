const mongoose=require("mongoose");
const {Schema,model}=mongoose;
const Usersc=new Schema({
    email:{
        type:String,
        lowercase:true
    },
    pwd:{
        type:String,
        minLength:8,
        validate:()=>{

        }
    },
    profile: mongoose.SchemaTypes.ObjectId,
    access_code:{
        type:Number,
        required:true,
    }
})
const User=model('User',Usersc);
exports.User=User;