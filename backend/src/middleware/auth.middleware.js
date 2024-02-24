import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../modles/user.model.js";
import jwt from "jsonwebtoken";

const authenticateUser = asyncHandler(async (req, _ , next) => {
  try {
    const token =
      req.cookies.accessToken || req.header("Authorization")?.replace("Bearer " , "");

    console.log(token);

    if (!token) {
      throw new ApiError(401 , "Invalid Token, Please Login Again!");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    let userId = decodedToken._id;
    console.log(userId);
    const user = await User.findById(userId).select("-password -refreshToken");
    console.log(user);
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

export default authenticateUser;
