import express from "express";
import {
  getUpload,
  postUpload,
  getWatch,
  postWatch
} from "./videoController";

import {
  home,
} from "./UserController";

const videoRouter = express.Router();

videoRouter.get("/", home);
videoRouter.route("/:id").get(getWatch).post(postWatch);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;