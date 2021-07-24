import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (res, req) => console.log("root"));
globalRouter.get("/trending", (res, req) => console.log("trending"));
globalRouter.get("/new", (res, req) => console.log("new"));
globalRouter.get("/join", (res, req) => console.log("join"));
globalRouter.get("/login", (res, req) => console.log("login"));

export default globalRouter;
