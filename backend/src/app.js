import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

import tweetRouter from "./routes/tweet.router.js";
import userRouter from "./routes/user.router.js";
import feedRouter from "./routes/feed.router.js";
import likeRouter from "./routes/like.routes.js"
//   http://localhost:4000
app.use("/api/v1", userRouter);
app.use("/home", tweetRouter);
app.use("/home" , feedRouter)
app.use("/api/v1/likes"  , likeRouter)

export { app };
 