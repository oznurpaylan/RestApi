const mongoose=require('mongoose');
const {Schema}=mongoose

const wordSchema= new Schema ({
    name:{
        type:String,
        required:true //isim alanı zorunlu
    },
    description:{
        type:String,
        required:true
    }
})

const wordData=mongoose.model("wordData",wordSchema)
module.exports=wordData;
