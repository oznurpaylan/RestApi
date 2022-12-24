import User from "../models/userModel.js";
import bcrypt from "bcrypt";

//ywni kullanıcı oluşturmak
const createUser = async(req,res)=>{
    try{
        const user=await User.create(req.body);
        res.status(201).json({
            succeded:true,
            user,
        });
    }catch(error){
        res.status(500).json({
            succeded: false,
            error
        });
    }
};

//db de arama yaparak giriş içlemi
const loginUser = async(req,res)=>{
    try{
        const {email,password}=req.body

console.log("gelen: " ,req.body) //body den gelen mail ve şifre

        const mail= await User.findOne({email}) //veri tabanında ilgili kullanıcı arama
        
        let same=false
        
        if(mail){
            same=await bcrypt.compare(password, mail.password)

console.log("same: " ,same) //same deki değer

        }else{
            return res.status(401).json({
                succeded: false,
                error:"Kullanıcı Bulunamadı"
                });
        }

        if(same){
            res.status(200).send("Giriş Yapıldı")
        }else{
            res.status(401).json({
                succeded: false,
                error:"Şifre eşleşmedi"
                });
        }



    }catch(error){
        res.status(500).json({
            succeded: false,
            error
        });
    }
};


export {createUser,loginUser};