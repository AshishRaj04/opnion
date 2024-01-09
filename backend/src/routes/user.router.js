import { Router } from "express";
import { registerUser } from "../controllers/user.controller";
import { upload } from "../middleware/multer.middleware";
const router = Router();

router.route("/registerUser").post(
  upload.fields[
    ({
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    })
  ],
  registerUser
);
