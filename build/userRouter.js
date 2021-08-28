"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("./userController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.get("/", _userController.home);
userRouter.route("/join").get(_userController.getJoin).post(_userController.postJoin);
userRouter.route("/login").get(_userController.getLogin).post(_userController.postLogin);
userRouter.route("/edit").get(_userController.getEdit).post(_userController.postEdit);
userRouter.get("/logout", _userController.logout);
var _default = UserRouter;
exports["default"] = _default;