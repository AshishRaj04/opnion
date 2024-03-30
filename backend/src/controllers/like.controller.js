import { Like } from "../modles/likes.model.js";
import { Tweet } from "../modles/tweet.model.js";
import { Comment } from "../modles/comment.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const toggleTweetLike = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;
  const tweet = await Tweet.findById(tweetId);
  console.log(tweet);
  const user_id = req.user._id;
  // console.log(user_id)
  if (!tweet) {
    throw new ApiError(401, "Tweet does not exists");
  }
  const existingLike = Like.findOne({ tweet: tweetId, likedBy: user_id });
  console.log(existingLike.findOne({likedBy}))
  if (existingLike) {
    // console.log(existingLike)
    await existingLike.deleteOne({ tweet: tweetId, likedBy: user_id });
    const numberOfLikes = await Like.countDocuments({ tweet: tweetId });
    res
      .status(200)
      .json(new ApiResponse(200, { likeCount: numberOfLikes }, "Unliked"));
  } else {
    // console.log(existingLike)
    const newLike = new Like({ tweet: tweetId, likedBy: user_id });
    await newLike.save();
    const numberOfLikes = await Like.countDocuments({ tweet: tweetId });
    res
      .status(200)
      .json(new ApiResponse(200, { likeCount: numberOfLikes }, "Liked"));
  }
});

const toggleCommentLike = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
});

const getLikedTweets = asyncHandler(async (req, res) => {});

export { toggleTweetLike, toggleCommentLike, getLikedTweets };
