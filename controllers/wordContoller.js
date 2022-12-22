const { model } = require('mongoose');
const wordData=require('../database/wordModel');

const createWord=(req,res)=>{
    const word=wordData.create(req.body);
    res.status(201).json({
        succeded: true,
        word,
    });
}

module.exports=createWord;