import { Router } from "express";
import {postTweet} from "../controllers/tweet.controller.js"
const router = Router();


router.route("/").post(postTweet);

export default router;

// const tweet = async (req, res) => {
//  return await res.status(200).json({
//     message: "Tweet has been posted",
//     data: {
//       tweet: "Happy New Year",
//     },
//   });
// };