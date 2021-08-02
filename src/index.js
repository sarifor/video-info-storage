import "./db";
import "./models/Movie";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const PORT = 4040;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);

app.use("/movies", movieRouter);

// app.get("/", test);
// Codesanbox does not need PORT :)
app.listen(PORT, () => console.log(`✅  Server Ready!`));
