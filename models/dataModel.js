import mongoose from "mongoose";

//kelime kayıt için schema oluşturnma
const{Schema}=mongoose
const dataSchema= new Schema({
    word:{
        type: String
    },
    meaning:{
        type: String
    },
},
{
    timestamps: true
})


const Data=mongoose.model('Data',dataSchema);
export default Data;