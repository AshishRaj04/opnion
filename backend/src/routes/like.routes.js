import {Router} from "express"
import { toggleTweetLike } from "../controllers/like.controller.js"

import {authenticateUser} from "../middleware/index.js"

const router = Router()

router.use(authenticateUser)

router.route("/toggle/t/:tweetId").post(toggleTweetLike)

export default router