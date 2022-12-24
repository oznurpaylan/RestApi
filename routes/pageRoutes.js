import express from 'express'
import * as pageController from "../controllers/pageControllers.js"

const router = express.Router()


router.route("/").get(pageController.loginGet)
router.route("/register").get(pageController.registerGet)
router.route("/index").get(pageController.indexGet)

export default router