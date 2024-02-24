import jwt from "jsonwebtoken";
import { User } from "../modles/user.model.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Internal server error");
  }
};

const varifyUser = async (req, res, next) => {
  const accesstoken = req.cookies.accessToken;
  if (!accesstoken) {
    if (renewToken(req, res)) {
      next();
    }
  } else {
    jwt.verify(accesstoken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.json({ valid: false, message: "Invalid Token" });
      } else {
        next(decoded);
      }
    });
  }
};

const renewToken = async (req, res) => {
  const refreshtoken = req.cookies.refreshToken;
  let exist = false;
  if (!refreshtoken) {
    return res.json({ valid: false, message: "No refresh token" });
  } else {
    const decodedToken = jwt.verify(
      refreshtoken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const userId = decodedToken._id;
    // const user = await User.findById(userId).select("-password -refreshToken");
    const { newAccessToken, newRefreshToken } =
      generateAccessAndRefreshToken(userId);

    res.cookie("accessToken", newAccessToken, {
      maxAge: 30000,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.cookie("refreshToken", newRefreshToken, {
      maxAge: 120000,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    exist = true
  }
  return exist;
};

export default varifyUser;
