import movieRouter from "./movieRouter";
import express from "express";
// import path from "path";

const app = express();
const PORT = 4040;

app.set("view engine", "pug");
app.set("views", process.cwd() + '/src/views');

app.use("/", movieRouter);

app.listen(PORT, () => {
    console.log("Server Connected");
});