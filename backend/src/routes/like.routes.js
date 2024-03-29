import { Router } from "express";
import {
  toggleTweetLike,
  toggleCommentLike,
  getLikedTweets,
} from "../controllers/like.controller.js";

import { authenticateUser } from "../middleware/index.js";

const router = Router();

// router.use(authenticateUser);

router.route("/toggle/t/:tweetId").post(authenticateUser, toggleTweetLike);
router.route("/toggle/c/:commentId").post(authenticateUser, toggleCommentLike);
router.route("/tweets").get(authenticateUser, getLikedTweets);

export default router;
