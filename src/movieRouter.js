import Router from "express";
import { home, addMovie } from "./movieController";

const movieRouter = Router();

movieRouter.get("/", home);
movieRouter.get("/add", addMovie);

export default movieRouter;