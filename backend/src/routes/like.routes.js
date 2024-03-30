import { Router } from "express";
import {
  toggleTweetLike,
  toggleCommentLike,
  getLikedTweets,
} from "../controllers/like.controller.js";

import { authenticateUser , actionMiddleware} from "../middleware/index.js";

const router = Router();

// router.use(authenticateUser);

router.route("/toggle/t/:tweetId").post( actionMiddleware , toggleTweetLike);
router.route("/toggle/c/:commentId").post(authenticateUser, toggleCommentLike);
router.route("/tweets").get(authenticateUser, getLikedTweets);

export default router;
