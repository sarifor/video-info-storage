import express from "express";
import multer from "multer";
import {
  home,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  getEdit,
  postEdit
} from "./userController";

const userRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

userRouter.get("/", home);
userRouter.route("/join").get(getJoin).post(upload.single('photo'), postJoin);
userRouter.route("/login").get(getLogin).post(postLogin);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/logout", logout);

export default userRouter;