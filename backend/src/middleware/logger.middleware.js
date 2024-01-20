import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { User } from "../modles/user.model.js";

const authenticateUserAfterLogin = asyncHandler(async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      const exists = await renewToken(req, res);
      console.log(exists);
      if (exists) {
        next();
      } else {
        throw new ApiError(
          401,
          "Authentication failed : access token not generated"
        );
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
    throw new ApiError(401, "Authentication failed");
  }
});

const renewToken = async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken;
    let exists = false;
    if (!refreshToken) {
      throw new ApiError(401, "No Refresh Token");
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
      console.log(accessToken);
      res.cookies(accessToken, { maxAge: 60000 });
    }
    return exists;
  } catch (error) {
    throw new ApiError(
      500,
      "Server Error : while generating access token form refresh token"
    );
  }
};

export default authenticateUserAfterLogin;
