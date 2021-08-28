"use strict";

require("regenerator-runtime");

require("./db");

require("./models/User");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _userRouter = _interopRequireDefault(require("./userRouter"));

var _videoRouter = _interopRequireDefault(require("./videoRouter"));

var _middlewares = require("./middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// test
var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
app.set("view engine", "pug");
app.set("views", _path["default"].join(__dirname, "views"));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _expressSession["default"])({
  secret: "Hello!",
  resave: true,
  saveUninitialized: true
}));
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

app.use(_middlewares.localsMiddleware);
app.use("/", _userRouter["default"]);
app.use("/videos", _videoRouter["default"]);
app.listen(PORT, function () {
  return console.log("\u2705  Server Ready!");
});