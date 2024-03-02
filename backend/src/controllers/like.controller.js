import mongoose , {isValidObjectId} from "mongoose"
import { Like } from "../modles/likes.model.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const toggleTweetLike = asyncHandler(async(req , res) => {
    const  {tweetId} = req.params

})

export {toggleTweetLike};