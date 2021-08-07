import "./models/Movie";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const PORT = 4040;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`✅  Server Ready!`));
