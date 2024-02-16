import { Tweet } from "../modles/tweet.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const postTweet = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);

    const { content } = req.body;

    if (!content) {
      throw new ApiError(401, "Tweet is empty");
    }

    const createdTweet = await Tweet.create({
      content: content,
    });

    const newTweet = await Tweet.findById(createdTweet._id);

    if (!newTweet) {
      throw new ApiError(502, "Server Error");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, newTweet, "Tweet has been added"));
  } catch (err) {
    console.log("Error in posting tweet : ", err);
  }
});

const getTweets = asyncHandler(async (req, res) => {
  const alltweets = await Tweet.find()
    return res
    .status(200)
    .json(new ApiResponse(200 , alltweets , "All Tweets are sent"))
  
});

export { postTweet, getTweets };
