import { Router } from "express";
import { dashboard } from "../controllers/dashboard.controller.js";
import authenticateUser from "../middleware/auth.middleware.js";
const router = Router();

router.route("/").get(authenticateUser, dashboard);

export default router;
