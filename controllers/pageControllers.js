
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

const editGet=(req,res)=>{
    res.render('editWord', {
        link: 'editWord',
    });
}

const searchGet=(req,res)=>{
    res.render('searchWord', {
        link: 'searchWord',
    });
}

export{loginGet,registerGet,indexGet,editGet,searchGet}