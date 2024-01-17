import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { User } from "../modles/user.model.js";

const authenticateUserAfterLogin = asyncHandler(async (req, _, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    console.log(req.cookies);
    if (!accessToken) {
      // if (renewToken(req, res)) {
      //   next();
      // }
      throw new ApiError(401, "no access token");
    } else {
      console.log("access token exists");
      const decodedToken = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET
      );
      console.log(decodedToken)
      console.log("access token verified")
      next()
      // (err, decoded) => {
      //   if (err) {
      //     return res.json(new ApiError(400, "Invalid Token"));
      //   } else {
      //     console.log(req.email)
      //     req.email = decoded.email;

      //     next();
      //   }
      // }
    }
  } catch (error) {
    return new ApiError(401, "Authentication failed");
  }
});

// const renewToken = (req, res) => {
//   try {
//     const refreshToken = res.cookies?.refreshToken;
//     let exist = false;
//     if (!refreshToken) {
//       return new ApiError(401, "No Refresh Token");
//     } else {
//       jwt.verify(
//         refreshToken,
//         process.env.REFRESH_TOKEN_SECRET,
//         (err, decoded) => {
//           if (err) {
//             throw new ApiError(401, "Invalid refresh token");
//           } else {
//             const accessToken = jwt.sign(
//               { email: decoded.email },
//               process.env.ACCESS_TOKEN_SECRET,
//               { expiresIn: "1m" }
//             );
//             const option = {
//               httpOnly: true,
//               secure: true,
//             };
//             req.cookie("accessToken", accessToken, option);
//             exist = true;
//           }
//         }
//       );
//     }
//     return exist;
//   } catch (error) {
//     return new ApiError(500, "Server Error");
//   }
// };

export default authenticateUserAfterLogin;
