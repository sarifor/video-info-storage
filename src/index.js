import dotenv from "dotenv"; // test heroku!
dotenv.config();

import "regenerator-runtime";

import "./db";
import "./models/User";

import express from "express";
import path from "path";
import bodyParser from "body-parser";
import session from "express-session";
import userRouter from "./userRouter";
import videoRouter from "./videoRouter";

import { localsMiddleware } from "./middlewares";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "/src/views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    name: "cookie from my app",
    secret: process.env.SESSION_SECRET,
    cookie: {
      httpOnly: true,
    },
    resave: true,
    saveUninitialized: true
  })
);

/*
app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
      if (Object.keys(sessions).length === 0) {
        console.log("Server knows no brower yet")
      } else {
        console.log(sessions);
      }
      next();
    });
});
*/

/*
app.get("/add-one", (req, res, next) => {
  req.session.potato += 1;
  return res.send(`${req.session.id} ${req.session.potato}`);
});
*/

app.use(localsMiddleware);
app.use("/", userRouter);
app.use("/videos", videoRouter);
app.use("/static", express.static("assets"));
app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => console.log(`✅  Server Ready!`));