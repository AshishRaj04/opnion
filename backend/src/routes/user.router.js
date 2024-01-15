import { Router } from "express";
import { registerUser , loginUser , logoutUser } from "../controllers/user.controller.js";
import {authenticateUser} from "../middleware/index.js"
import { upload } from "../middleware/multer.middleware.js";
const router = Router();

router.route("/registerUser").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    }
  ]),
  registerUser
);

router.route("/login").post(loginUser)
router.route("/logout").post(authenticateUser , logoutUser)

export default router