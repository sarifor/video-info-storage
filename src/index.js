import movieRouter from "./movieRouter";

import express from "express";
const app = express();
const PORT = 4040;

app.set("views", process.cwd() + '/views');
app.set("views engine", 'pug');
app.use("/", movieRouter);

app.listen(PORT, () => {
    console.log("Server Connected");
})