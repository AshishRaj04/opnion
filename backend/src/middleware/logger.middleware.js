import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import jwt from "jsonwebtoken";
import { User } from "../modles/user.model.js";

const authenticateUserAfterLogin = asyncHandler(async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      const  exists  = await renewToken(req, res);
      console.log(exists);
      if (exists) {
        next();
      } else {
        next(new ApiError(401, "Authentication failed"));
      }
    } else {
      const decodedToken = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET
      );
      console.log(decodedToken);
      next();
    }
  } catch (error) {
    next(new ApiError(401, "Authentication failed"));
  }
});

const renewToken = async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken;
    let exists = false;
    if (!refreshToken) {
      return new ApiError(401, "No Refresh Token");
    } else {
      const decodedToken = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );
      let user_id = decodedToken._id;
      const user = await User.findById(user_id).select(
        "-password -refreshToken -iat -exp"
      );
      if (!user) {
        throw new ApiError(401, "User not found during token renewal");
      }

      const accessToken = jwt.sign(
        user.toJSON(),
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1m",
        }
      );
      exists = true;
      res
        .status(200)
        .cookies("accessToken", accessToken, { maxAge: 60000 })
        .json(
          new ApiResponse(200, { accessToken }, "new access token generated")
        );
      return exists;
    }
  } catch (error) {
    return new ApiError(
      500,
      "Server Error : while generating access token form refresh token"
    );
  }
};

export default authenticateUserAfterLogin;
