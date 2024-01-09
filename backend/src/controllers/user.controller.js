import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import {User} from "../modles/user.model.js"
import {uploadOnCloudnary , deleteFromCloudinary} from "../utils/cloudinary.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

const registerUser  = asyncHandler(async(req , res) => {
    const {username , email , fullName , password} = req.body

    if(
        [username , email , fullName , password].some((entries) => entries.length === 0 ? true : false)
    ){
        return new ApiError(400 , "All fields are required!")
    }

   const userExists = await User.exists({username , email})

   if(userExists){
    return new ApiError(400 , 'Email or username already exists')
   }



})

export {
    registerUser
}