import { User } from "../models/users.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { z } from 'zod'

const userSchema = z.object({
    username: z.string(),
    password: z.string().min(8)
})

const handleLogin = asyncHandler(async (req, res) => {
    

})

const handleLogout = asyncHandler(async (req, res) => {

})

const handleRegister = asyncHandler(async (req, res) => {
    if(!userSchema.safeParse(req.body).success){
        throw new ApiError(400, "username and password not valid");
    }

    const {username, password} = req.body;

    const existedUser = User.findOne({username});
    
    if(existedUser){
        throw new ApiError(400, "User already exist");
    }
})

export {
    handleLogin,
    handleRegister,
    handleLogout
}