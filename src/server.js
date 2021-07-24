import express from "express";

const app = express();
const PORT = 4040;

const urlLogger = function (res, req, next) {
  const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log(fullUrl);
  next();
};

const timeLogger = function (res, req, next) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  console.log(year + "년" + (month + 1)  + "월" + day + "일");
  next();
};

const securityLogger = function (res, req, next) {
  const protocol = req.protocol;
  if (protocol === "https") {
    console.log("secure");
  } else {
    console.log(protocol);
    console.log("insecure");
  }
  next();
};

const protectorMiddleware = function (res, req, next) {
  const path = req.host;
  if (path === "protected") {
    return res.end();
  }
  next();
};

app.use(urlLogger);
app.use(timeLogger);
app.use(securityLogger);
app.use(protectorMiddleware);

app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

app.listen(PORT, () => `Listening!✅`);
