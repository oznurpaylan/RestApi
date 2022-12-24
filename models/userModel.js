import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt";


//kullanıcı kayıt için schema oluşturnma
const{Schema}=mongoose
const userSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
},
{
    timestamps: true
})

//kullanıcı şifrelereini db de hash ile görmek için
userSchema.pre("save",function(next){
    const user=this
    bcrypt.hash(user.password,10,(err,hash)=>{
        user.password=hash
        next()
    })
})

const User=mongoose.model('User',userSchema);
export default User;