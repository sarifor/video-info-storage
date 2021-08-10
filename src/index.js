import express from "express";
import path from "path";
import bodyParser from "body-parser";
import router from "./router";
import multer from "multer";
import fs from "fs";

const app = express();
const PORT = 4040;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => console.log(`Listening!`));
