import { Router } from "express";
import { registerUser , loginUser } from "../controllers/user.controller.js";
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

export default router