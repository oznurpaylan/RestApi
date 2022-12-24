
//Sayfalar için genel controllerlar


const loginGet=(req,res)=>{
    res.render('login', {
        link: 'login',
    });
}

const registerGet=(req,res)=>{
    res.render('register', {
        link: 'register',
    });
}

const indexGet=(req,res)=>{
    console.log(req.mail)
    res.render('index', {
        link: 'index',
    });

}


export{loginGet,registerGet,indexGet}