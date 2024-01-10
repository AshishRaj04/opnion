import { asyncHandler } from "../utils/asyncHandler.js";

export const authenticateUser = asyncHandler(async(req , res , next)=>{
    console.log(req)
    next()
})