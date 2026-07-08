import jwt from "jsonwebtoken"
import User from '../models/UserModel.js'
export const updateUser = async (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if (token) {
            token = req.headers.authorization.split(" ")[1]
        }

        if (!token) throw new Error("No Token Provided", 400);
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decode);

        const findUserandUpdate = await User.findByIdAndUpdate(decode.id, req.body)
        console.log(findUserandUpdate);

        return res.status(200).json({
            status: true,
            message: "update user successfully!"
        })
    } catch (error) {
        next(error)
    }
}


export const getAllUsers = async (req, res) => {
    // console.log("req query -->", req.query);
    
    // let query = {age : {$gte: req.query.ageStart, $lte:req.query.ageEnd}}

    // let querytwo = {...req.query}

    // if(req.query.ageStart && req.query.ageEnd){

    // }

    try {
        let allUsers = await userModel.find().limit(10).skip(2).sort("-age")
        console.log(allUsers);

        return successResponse(200, true, "users retrieve successfully", allUsers, res)
        
    } catch (error) {
        return errorResponse(400, false, error.message, res)
        
    }
}