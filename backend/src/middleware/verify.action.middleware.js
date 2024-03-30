import { User } from "../modles/user.model.js";
import jwt from "jsonwebtoken";

const actionMiddleware = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    console.log("Invalid Token, Please Login Again!");
  }

  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  let userId = decodedToken?._id;
  // console.log(userId);
  const user = await User.findById(userId).select("-password -refreshToken");
  // console.log(user);
  if (!user) {
    console.log("Invalid Access Token");
  }
  req.user = user;

  next();
};

export default actionMiddleware;
