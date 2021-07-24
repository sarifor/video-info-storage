import express from "express";

const userRouter = express.Router();

userRouter.get("/", (res, req) => console.log("user main"));
userRouter.get("/edit-profile", (res, req) => console.log("edit profile"));
userRouter.get("/:id", (res, req) => console.log("user id"));

export default userRouter;
