import User from "../models/userModel.js"
import jwt from "jsonwebtoken"


const authenticateToken= async (req,res,next)=>{
    try {
        const token=req.cookies.jwtoken

        if(token){
            jwt.verify(token, process.env.JWT,(err)=>{
              if(err){
                console.log(err.message)
                res.redirect("/")
              }else{
                next()
              }
            })
        }else{
            res.redirect("/")
        }

    } catch (error) {
        res.status(401).json({
            succeeded: false,
            error:"Kullanıcı doğrulunamadı"
        })
    }

}

export{authenticateToken}