import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";

const app = express();
const PORT = 4040;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(PORT, () => console.log(`✅  Server Ready!`));
