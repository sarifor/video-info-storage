import express from "express";
import { seeAllMovies } from "./movieController";

const routeRouter = express.Router();

routeRouter.get("/", seeAllMovies);

export default routeRouter;
