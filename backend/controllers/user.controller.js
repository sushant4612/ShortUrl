import { User } from "../models/users.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js"
import asyncHandler from "../utils/asyncHandler.js";
import { z } from 'zod'

const userSchema = z.object({
    username: z.string(),
    password: z.string().min(8)
})

const handleLogin = asyncHandler(async (req, res) => {

    if(!userSchema.safeParse(req.body).success){
        throw new ApiError(400, "Enter valid password");
    }

    const {username, password} = req.body;

    const user = await User.findOne({username});
    
    if(!user){
        throw new ApiError(400, "Invalid Username"); 
    }
    
    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if(!isPasswordCorrect){
        throw new ApiError(400, "Invalid Password"); 
    }
    
    const token = await user.getToken();
    
    return res.status(200).json(new ApiResponse(200,token,"Successfully Login"));
})

const handleRegister = asyncHandler(async (req, res) => {

    if(!userSchema.safeParse(req.body).success){
        throw new ApiError(400, "Enter valid password");
    }

    const {username, password} = req.body;

    const existedUser = await User.findOne({username});    
    if(existedUser){
        throw new ApiError(400, "User already exist");
    }
    
    let user = new User({
        username,
        password
    })

    await user.save();

    const token = await user.getToken();
    
    return res.status(200).json(new ApiResponse(200,token,"Successfully Registered"));
})

export {
    handleLogin,
    handleRegister
}