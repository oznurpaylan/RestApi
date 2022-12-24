import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//ywni kullanıcı oluşturmak
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            succeded: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        });
    }
};

//db de arama yaparak giriş içlemi
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const mail = await User.findOne({ email }) //veri tabanında ilgili kullanıcı arama

        let same = false

        if (mail) {
            same = await bcrypt.compare(password, mail.password)
        } else {
            return res.status(401).json({
                succeded: false,
                error: "Kullanıcı Bulunamadı"
            });
        }

        if (same) {
            const token= createToken(mail._id)
            res.cookie("jwtoken",token,{
                httpOnly: true,
                maxAge: 1000*60*60*24

            })

            res.redirect("/users/index")

        } else {
            res.status(401).json({
                succeded: false,
                error: "Şifre eşleşmedi"
            });
        }

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        });
    }
};

const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT, {
        expiresIn:"1d" //1 günlük token üretilir
    })

}

const getIndex=(req,res)=>{
    res.render('index', {
        link:'index'
    })
}


export { createUser, loginUser, getIndex };