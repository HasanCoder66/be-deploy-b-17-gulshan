import express from 'express'
import { login, signup } from '../controllers/authController.js'
import { upload } from '../utils/multer.js'


const authRoute = express.Router()

authRoute.post("/signup", upload.single("photo"), signup)
authRoute.post("/login", login)

export default authRoute