import express, { Router } from "express";
import { 
    seeAllMovies, 
    movieDetail, 
    // getEdit, 
    // postEdit, 
    // movieDelete 
} from "./movieController";

const routeRouter = express.Router();

routeRouter.get("/", seeAllMovies);
routeRouter.get("/movies/:id", movieDetail);
// routeRouter.route("/movies/:id/edit").get(getEdit).post(postEdit);
// roiteRouter.route("/movies/:id/delete").get(movieDelete);

export default routeRouter;
