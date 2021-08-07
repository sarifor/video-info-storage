import express from "express";
import { home, addMovie } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/add", addMovie);
movieRouter.post("/add", addMovie);

export default movieRouter;