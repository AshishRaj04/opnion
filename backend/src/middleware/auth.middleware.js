import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";

import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/apiResponse.js";

export const authenticateUser = asyncHandler(async (req, _, next) => {
  try {
    const accessToken = req.cookies?.accessToken;
    if (!accessToken) {
      if (renewToken(req, res)) {
        next();
      }
    }
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    next();
  } catch (error) {
    return new ApiError(401, "Authentication failed");
  }
});

const renewToken = (req, res) => {
  const refreshToken = req.cookies?.refreshToken;
  let exists = false;
  if (!refreshToken) {
    return res.json(
      new ApiResponse(
        401,
        "Bad request , no refresh token ,please register to generate a refresh token"
      )
    );
  } else {
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, decoded) => {
        if (error) {
          throw new ApiError(401, "Invalid Refresh Token");
        } else {
          const newAccessToken = jwt.sign(
            req.body.email,
            process.env.ACCESS_TOKEN_SECRET,
            {
              expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
            }
          );
          const option = {
            httpOnly: true,
            secure: true,
          };
          exists = true;
          return res
            .status(200)
            .cookies("accessToken", newAccessToken, option)
            .josn(
              new ApiResponse(
                200,
                { accessToken: newAccessToken, exists },
                "New access token generated"
              )
            );
        }
      }
    );
  }
};
