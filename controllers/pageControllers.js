const path=require('path');


module.exports.indexGet=function(req,res){
    res.render('index');
}


module.exports.indexPost=function(req,res){
    res.render('index');
}

module.exports.registerGet=function(req,res){
    res.render('register');
}

module.exports.registerPost=function(req,res){
    res.render('register');
}