import express from 'express'
import * as userController from "../controllers/userController.js"
import * as authMiddleware from "../middlewares/authMiddleware.js"

const router = express.Router()

router.route("/").post(userController.loginUser)
router.route("/register").post(userController.createUser)
router.route("/index").get(authMiddleware.authenticateToken, userController.getIndex)



export default router