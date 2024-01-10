import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { User } from "../modles/user.model.js";
import {
  uploadOnCloudnary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import fs from "fs";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullName, password } = req.body;

  if (
    [username, email, fullName, password].some((entries) =>
      entries.length === 0 ? true : false
    )
  ) {
    return new ApiError(400, "All fields are required!");
  }

  const ifUserExists = await User.exists({ username, email });

  if (ifUserExists) {
    return new ApiError(400, "Email or username already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!(avatarLocalPath && coverImageLocalPath)) {
    throw new ApiError(400, "Avatar and cover image are required fields");
  }

  const avatar = await uploadOnCloudnary(avatarLocalPath);
  const coverImage = await uploadOnCloudnary(coverImageLocalPath);

  if (!(avatar && coverImage)) {
    //delete local file after cloudinary error
    fs.unlinkSync(avatarLocalPath);
    fs.unlinkSync(coverImageLocalPath);
    throw new ApiError(
      500,
      "Something went wrong while uploading the files to cloudinary"
    );
  }

  const user = await User.create({
    fullName,
    email,
    password,
    avatar: avatar.url,
    coverImage: coverImage.url,
    username: username.toLowerCase(),
  });

  const newUser = await User.findById(user._id).select(
    "-password  -refreshToken"
  );

  if (!newUser) {
    throw new ApiError(500, "Something went wrong while regestring the user");
  }

  res
    .status(200)
    .json(new ApiResponse(200, newUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    throw new ApiError(401, "email and password are required");
  }
  const existingUser = await User.findOne(email);
  const user = User.findById(existingUser._id);

  if (!existingUser) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isPasswordCorrect = await existingUser.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid Password");
  }

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  const loggedInUser = await User.findById(existingUser._id).select(
    "-password  -refreshToken"
  );

  const option = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, option)
    .cookie("refreshToken", refreshToken, option)
    .json(
      new ApiResponse(
        200,
        {
          existingUser: loggedInUser,
          accessToken,
          refreshToken,
        },
        "user logged in successfully"
      )
    );
});

export { registerUser, loginUser };
