import express from "express";
import { getUpload, postUpload } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/upload", getUpload);
movieRouter.post("/upload", postUpload);

export default movieRouter;
