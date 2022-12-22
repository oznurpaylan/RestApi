const express = require('express');
const dotenv=require('dotenv');
const conn=require('./database/db.js')
const pageRoutes=require('./routes/pageRoutes')
const bodyParser = require('body-parser');


const app = express();
const port= process.env.PORT;

dotenv.config();
conn();

//form elamanlarını pars etmesi için bodyParser
app.use(bodyParser.urlencoded({extended:true}));
//json objesi için bodyParser
app.use(bodyParser.json());

app.use('/',pageRoutes);
app.use(express.json());

//ejs tamplate engine
app.set('view engine', 'ejs')

//static files middleware
app.use(express.static('public'))




// app.get('/',(req,res)=>{
//     res.render('index')
// })

// app.get('/register',(req,res)=>{
//     res.render('register')
// })
// app.post('/register',(req,res)=>{
//     res.render('register')
// })


app.listen(port, ()=>{
    console.log(`Uygulama ${port} portunda başlatıldı`);
});