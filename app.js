import express from 'express'
import dotenv from 'dotenv'
import conn from './database/db.js';
import cookieParser from 'cookie-parser';
import pageRoute from "./routes/pageRoutes.js"
import userRoute from "./routes/userRoutes.js"
import flash from "connect-flash"

const app = express();
dotenv.config();

//db bağlantısı
conn();

//ejs tamplate engine
app.set('view engine', 'ejs')

//static files middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

//routes
app.use("/",pageRoute)
app.use("/users",userRoute)


//flash middeware
app.use(flash())



const port= process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Uygulama ${port} portunda başlatıldı`);
});