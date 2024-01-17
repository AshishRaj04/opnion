import { Router } from "express";
import {feedController} from "../controllers/feed.controller.js"
import {authenticateUserAfterLogin} from "../middleware/index.js"
const router = Router();

router.route("/feed").get(authenticateUserAfterLogin , feedController);

export default router
