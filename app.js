import express from 'express'
import dotenv from 'dotenv'
import conn from './database/db.js';
import pageRoute from "./routes/pageRoutes.js"

const app = express();
dotenv.config();

//db bağlantısı
conn();

//ejs tamplate engine
app.set('view engine', 'ejs')

//static files middleware
app.use(express.static('public'))

//routes
app.use("/",pageRoute)


const port= process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Uygulama ${port} portunda başlatıldı`);
});