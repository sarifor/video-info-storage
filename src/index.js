import movieRouter from "./movieRouter";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 4040;

app.set("view engine", "pug");
app.set("views", process.cwd() + '/src/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", movieRouter);

app.listen(PORT, () => {
    console.log("Server Connected");
});