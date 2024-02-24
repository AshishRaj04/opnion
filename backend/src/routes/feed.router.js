import { Router } from "express";
import {feedController} from "../controllers/feed.controller.js"
import {authenticateUser} from "../middleware/index.js"
const router = Router();

router.route("/feed").get(authenticateUser , feedController);

export default router
