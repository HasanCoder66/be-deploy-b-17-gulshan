import express from 'express'
import { getAllUsers, updateUser } from '../controllers/userController.js'


const userRoute = express.Router()

userRoute.get("/", getAllUsers)
userRoute.put("/", updateUser)

export default userRoute