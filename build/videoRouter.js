"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _videoController = require("./videoController");

var _userController = require("./userController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var videoRouter = _express["default"].Router();

videoRouter.get("/", _userController.home);
videoRouter.route("/upload").get(_videoController.getUpload).post(_videoController.postUpload);
videoRouter.get("/:id", _videoController.getWatch);
videoRouter.route("/:id/edit").get(_videoController.getEditVideo).post(_videoController.postEditVideo);
var _default = videoRouter;
exports["default"] = _default;