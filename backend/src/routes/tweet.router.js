import { Router } from "express";
import {postTweet} from "../controllers/tweet.controller.js"
import {authenticateUser} from "../middleware/auth.middleware.js"
const router = Router();


router.route("/").post(authenticateUser , postTweet);

export default router;
