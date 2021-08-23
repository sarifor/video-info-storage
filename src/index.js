import "./db";
import "./models/User";

import express from "express";
import path from "path";
import bodyParser from "body-parser";
import session from "express-session";
import userRouter from "./userRouter";
// import { localsMiddleware } from "./middlewares";

const app = express();
const PORT = 4040;

app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "/src/views")); // \ vs. / ?
console.log(__dirname); // 현재 실행하는 파일의 절대경로 e.g. "index.js가 있는 디렉토리"
console.log(process.cwd()); // node명령을 호출한 작업디렉터리의 절대경로 e.g. "pacakage.json이 있는 디렉토리"
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true
  })
);
// app.use(localsMiddleware);
app.use("/", userRouter);

app.listen(PORT, () => console.log(`✅  Server Ready!`));