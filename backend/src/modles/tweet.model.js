import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model("Tweet" , tweetSchema)