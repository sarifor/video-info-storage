import express from "express";
import { getUpload, postUpload, watch } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/upload", getUpload);
movieRouter.post("/upload", postUpload);
movieRouter.get("/:id", watch);
export default movieRouter;
