import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const feedController = asyncHandler(async ( _ , res) => {
  res.status(200).json(new ApiResponse(200, { valid: true } , "User is authorized"));
});

export {feedController}