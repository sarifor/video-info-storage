"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postEditVideo = exports.getEditVideo = exports.getWatch = exports.postUpload = exports.getUpload = void 0;

var _Video = _interopRequireDefault(require("./models/Video"));

var _User = _interopRequireDefault(require("./models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getUpload = function getUpload(req, res) {
  try {
    return res.render("upload");
  } catch (e) {
    return res.render("home", {
      err: e.message
    });
  }
};

exports.getUpload = getUpload;

var postUpload = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, title, desc, tags, _id, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // req.body에서 값 꺼내어, Video DB에 저장하고, 
            // session에서 user 정보 꺼내어, Videos.owner에 저장하고, home return
            _req$body = req.body, title = _req$body.title, desc = _req$body.desc, tags = _req$body.tags;
            _id = req.session.user._id;
            _context.prev = 2;
            _context.next = 5;
            return _User["default"].findById(_id);

          case 5:
            user = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", res.render("home", {
              err: _context.t0.message
            }));

          case 11:
            _context.prev = 11;
            _context.next = 14;
            return _Video["default"].create({
              title: title,
              desc: desc,
              tags: tags.split(","),
              owner: user._id
            });

          case 14:
            return _context.abrupt("return", res.redirect("/"));

          case 17:
            _context.prev = 17;
            _context.t1 = _context["catch"](11);
            return _context.abrupt("return", res.render("upload", {
              err: _context.t1.message
            }));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8], [11, 17]]);
  }));

  return function postUpload(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postUpload = postUpload;

var getWatch = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, video;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // req.params에서 받은 아이디를 Video DB에서 조회하여, watch.pug로 render
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Video["default"].findById(id).populate('owner');

          case 4:
            video = _context2.sent;
            return _context2.abrupt("return", res.render("watch", {
              video: video
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.render("home", {
              err: _context2.t0.message
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function getWatch(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getWatch = getWatch;

var getEditVideo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, video;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Video["default"].findOne({
              _id: id
            });

          case 4:
            video = _context3.sent;
            return _context3.abrupt("return", res.render("editVideo", {
              video: video
            }));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.render("watch", {
              err: _context3.t0.message
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function getEditVideo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getEditVideo = getEditVideo;

var postEditVideo = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, title, desc, tags, id, video;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // req.params.id로 Video를 찾아, req.body의 값을 Video에 업뎃하고, home으로 render
            _req$body2 = req.body, title = _req$body2.title, desc = _req$body2.desc, tags = _req$body2.tags;
            id = req.params.id;
            video = [];
            _context4.prev = 3;
            _context4.next = 6;
            return _Video["default"].findOneAndUpdate({
              _id: id
            }, {
              title: title,
              desc: desc,
              tags: tags.split(",")
            }, {
              "new": true
            });

          case 6:
            video = _context4.sent;

            if (video) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.render("editVideo", {
              err: "video does not exist"
            }));

          case 9:
            ;
            return _context4.abrupt("return", res.redirect("/"));

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](3);
            return _context4.abrupt("return", res.render("editVideo", {
              err: _context4.t0.message
            }));

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 13]]);
  }));

  return function postEditVideo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.postEditVideo = postEditVideo;