import { Router } from "express";
import {feedController} from "../controllers/feed.controller.js"
import {verifyUser} from "../middleware/index.js"
const router = Router();

router.route("/feed").get(verifyUser , feedController);

export default router
