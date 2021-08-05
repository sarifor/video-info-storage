import express from "express";
import { getUpload, postUpload, watch, getEdit, postEdit, search } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/upload", getUpload);
movieRouter.post("/upload", postUpload);
movieRouter.get("/search", search);
movieRouter.get("/:id", watch);
movieRouter.get("/:id/edit", getEdit);
movieRouter.post("/:id/edit", postEdit);

export default movieRouter;
