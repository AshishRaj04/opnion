import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";

const authenticateUserAfterLogin = asyncHandler(async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    
    // next()
    if (!accessToken) {
      // redirect to http://localhost:4000/api/v1/refreshToken
      // return res.redirect("http://localhost:4000/api/v1/refreshToken");
      console.log("no access token")
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



export default authenticateUserAfterLogin;
