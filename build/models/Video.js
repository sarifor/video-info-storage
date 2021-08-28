"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var VideoSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: false
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

var model = _mongoose["default"].model("Video", VideoSchema, "VideoA21");

var _default = model;
exports["default"] = _default;