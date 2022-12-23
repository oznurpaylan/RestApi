import express from 'express'
import * as pageController from "../controllers/pageControllers.js"

const router = express.Router()


router.route("/").get(pageController.loginGet)
router.route("/register").get(pageController.registerGet)

export default router