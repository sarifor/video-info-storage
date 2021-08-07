import movieRouter from "./movieRouter";

import express from "express";
const app = express();
const PORT = 4040;

app.set("views", process.cwd() + '/src/views');
console.log(process.cwd());
console.log(app.get("views"));

app.use("/", movieRouter);

app.listen(PORT, () => {
    console.log("Server Connected");
})