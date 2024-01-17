import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const feedController = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { authenticated: true } , "User is authenticated"));
});

export {feedController}