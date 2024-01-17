import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { User } from "../modles/user.model.js";

const authenticateUserAfterLogin = asyncHandler(async (req, _, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      if (renewToken(req, res)) {
        return next();
      }
    } else {
      const decodedToken = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET
      );

      next();
    }
  } catch (error) {
    return new ApiError(401, "Authentication failed");
  }
});

const renewToken = (req, res) => {
  try {
    const refreshToken = res.cookies?.refreshToken;
    let exist = false;
    if (!refreshToken) {
      return new ApiError(401, "No Refresh Token");
    } else {
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
          if (err) {
            throw new ApiError(401, "Invalid refresh token");
          } else {
            const accessToken = jwt.sign(
              { email: decoded.email },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: 60 }
            );
            const option = {
              httpOnly: true,
              secure: true,
            };
            req.cookie("accessToken", accessToken, option);
            exist = true;
          }
        }
      );
    }
    return exist;
  } catch (error) {
    return new ApiError(500, "Server Error");
  }
};

export default authenticateUserAfterLogin;
