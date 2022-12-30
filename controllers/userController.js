import User from "../models/userModel.js";
import Data from "../models/dataModel.js";
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
console.log('Kullanıcı oluşturuldu')
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

const getLogout=(req,res)=>{
    res.cookie('jwtoken','',{maxAge:1})
    res.redirect('/')
    console.log('Çıkış için yönlendiriliyor...')
}

//yeni kelime oluşturmak
const createData = async (req, res) => {
    try {
        const data = await Data.create(req.body);
        res.status(201).json({
            succeded: true,
            data,
        });
console.log('Data oluşturuldu')
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        });
    }
};

const postDataSearch=async(req,res)=>{
    const inData=req.body.dataSearch;
    console.log(inData);

     Data.findOne({word: inData},(err,data)=>{
        if(err){

            console.log(err);    
            res.redirect('/searchWord')       
        }
        else{
            res.json(data);
            console.log(data);
        }
    });
}



export { createUser, loginUser, getIndex, getLogout,createData, postDataSearch };

