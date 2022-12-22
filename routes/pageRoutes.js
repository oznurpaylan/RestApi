const { Router } = require("express");
const pageController=require("../controllers/pageControllers")
const wordController=require("../controllers/wordContoller")
const routes=Router();

routes.get('/',pageController.indexGet);
routes.get('/register',pageController.registerGet);

routes.post('/',pageController.indexPost);
routes.post('/register',pageController.registerPost);
routes.post('/wordCreate',wordController.createWord);

module.exports=routes