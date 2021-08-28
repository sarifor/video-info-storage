import express from "express";
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

userRouter.get("/", home);
userRouter.route("/join").get(getJoin).post(postJoin);
userRouter.route("/login").get(getLogin).post(postLogin);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/logout", logout);

export default userRouter;