import express from "express";
import {
  getUpload,
  postUpload
} from "./videoController";

import {
  home,
} from "./UserController";

const videoRouter = express.Router();

videoRouter.get("/", home);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;