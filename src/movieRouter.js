import express from "express";
import { getUpload } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/upload", getUpload);

export default movieRouter;
