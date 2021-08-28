import express from "express";
import {
  getUpload,
  postUpload,
  getWatch,
  getEditVideo,
  postEditVideo
} from "./videoController";

import {
  home,
} from "./userController";

const videoRouter = express.Router();

videoRouter.get("/", home);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id", getWatch);
videoRouter.route("/:id/edit").get(getEditVideo).post(postEditVideo);

export default videoRouter;