import express from "express";
import { seeAllMovies } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", seeAllMovies);

export default movieRouter;
