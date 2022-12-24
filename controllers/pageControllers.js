
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


export{loginGet,registerGet}