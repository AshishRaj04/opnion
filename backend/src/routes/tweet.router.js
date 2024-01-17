import { Router } from "express";
import {postTweet} from "../controllers/tweet.controller.js"
const router = Router();


router.route("/postTweet").post(postTweet);

export default router;
