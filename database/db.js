import mongoose from 'mongoose'

//db bağlantısı
const conn=()=>{
    mongoose.connect(process.env.DB_URI,{
        dbName:'restApi',
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log('DB bağlantısı sağlandı...')
    }).catch((err)=>{
        console.log(`BD bağlantısı sağlanamadı... ${err}`)
    })
}

export default conn;