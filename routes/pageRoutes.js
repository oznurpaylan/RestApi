import express from 'express'
import * as pageController from "../controllers/pageControllers.js"
import * as userController from "../controllers/userController.js"

const router = express.Router()


router.route("/").get(pageController.loginGet)
router.route("/register").get(pageController.registerGet)
router.route("/index").get(pageController.indexGet)
router.route("/logout").get(userController.getLogout)
router.route("/editWord").get(pageController.editGet)
router.route("/searchWord").get(pageController.searchGet)
router.route("/ekle").post(userController.createData)
router.route("/ara").post(userController.postDataSearch)

export default router