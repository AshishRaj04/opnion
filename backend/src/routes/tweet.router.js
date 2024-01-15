import { Router } from "express";
import {postTweet} from "../controllers/tweet.controller.js"
import {authenticateUserAfterLogin} from "../middleware/index.js"
const router = Router();


router.route("/postTweet").post(authenticateUserAfterLogin , postTweet);

export default router;
