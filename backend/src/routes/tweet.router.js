import { Router } from "express";
import {postTweet , getTweets} from "../controllers/tweet.controller.js"
const router = Router();


router.route("/postTweet").post(postTweet);
router.route("/getTweets").get(getTweets)

export default router;
