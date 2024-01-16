import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

import jwt from "jsonwebtoken";

const authenticateUserAfterLogin = asyncHandler(async (req, _, next) => {
  try {
    const accessToken = req.cookies?.accessToken;
    console.log(req.cookies);
    if (!accessToken) {
      throw new ApiError(404, "no access token");
      
    } else {
      const userData = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      next();
    }
  } catch (error) {
    return new ApiError(401, "Authentication failed");
  }
});

export default authenticateUserAfterLogin;
