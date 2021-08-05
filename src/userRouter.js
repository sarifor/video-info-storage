import express from "express";
import { home, getLogin, postLogin, getJoin, postJoin } from "./userController";

const userRouter = express.Router();

userRouter.get("/", home);
userRouter.get("/login", getLogin);
userRouter.post("/login", postLogin);
userRouter.get("/join", getJoin);
userRouter.post("/join", postJoin);

export default userRouter;
