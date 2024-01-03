import {DB_NAME} from "../constants.js";
import mongoose from "mongoose";
import { exit } from "process";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(`Failed to connect to database ${error.message}`);
    exit(1);
  }
};

export default connectDB