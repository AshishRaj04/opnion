import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../modles/user.model.js";
import jwt from "jsonwebtoken";

const authenticateUser = asyncHandler(async (req, _ , next) => {
  try {
    const accessToken = req.cookies?.accessToken;
    if (!accessToken) {
      throw new ApiError(401, "No access token exists");
    }
    const decodeToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );
    const userId = decodeToken._id;
    const user = User.findById(userId).select("-password  -refreshToken");

    if (!user) {
      throw new ApiError(401, "user does not exist");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

export default authenticateUser;
