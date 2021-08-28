"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.postEdit = exports.getEdit = exports.postLogin = exports.getLogin = exports.postJoin = exports.getJoin = exports.home = void 0;

var _User = _interopRequireDefault(require("./models/User"));

var _Video = _interopRequireDefault(require("./models/Video"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import bcrypt from "bcrypt";
var home = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var videos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Video["default"].find({});

          case 3:
            videos = _context.sent;

            if (!(Object.keys(videos).length === 0)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.render("home", {
              err: "Please add new video"
            }));

          case 8:
            return _context.abrupt("return", res.render("home", {
              videos: videos
            }));

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.render("home", {
              err: _context.t0.message
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function home(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.home = home;

var getJoin = function getJoin(req, res) {
  return res.render("join");
};

exports.getJoin = getJoin;

var postJoin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, username, password, password2, user;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, username = _req$body.username, password = _req$body.password, password2 = _req$body.password2; // name이 db에 이미 존재하는가, (존재하면 에러 메시지를 join.pug에 보냄)

            _context2.next = 3;
            return _User["default"].findOne({
              name: name
            });

          case 3:
            user = _context2.sent;

            if (!user) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.render("join", {
              err: "User Already Exist!"
            }));

          case 6:
            if (!(password !== password2)) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.render("join", {
              err: "Passwords do not match!"
            }));

          case 8:
            _context2.prev = 8;
            _context2.next = 11;
            return _User["default"].create({
              name: name,
              username: username,
              password: password
            });

          case 11:
            return _context2.abrupt("return", res.render("login"));

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](8);
            return _context2.abrupt("return", res.render("join", {
              err: _context2.t0.message
            }));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[8, 14]]);
  }));

  return function postJoin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postJoin = postJoin;

var getLogin = function getLogin(req, res) {
  return res.render("login");
};

exports.getLogin = getLogin;

var postLogin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body2, username, password, user;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //req.body에서 username과 password를 확보하여, 
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password; // username이 DB에 있나 보고, password가 해당 유저의 것과 일치하나 보고,

            _context3.prev = 1;
            _context3.next = 4;
            return _User["default"].findOne({
              username: username
            });

          case 4:
            user = _context3.sent;

            if (user) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.render("login", {
              err: "username does not exist"
            }));

          case 7:
            ;

            if (!(user.password !== password)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", res.render("login", {
              err: "password does not match!"
            }));

          case 10:
            ;
            req.session.user = user;
            req.session.loggedIn = true;
            return _context3.abrupt("return", res.redirect("/"));

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.render("login", {
              err: _context3.t0.message
            }));

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 16]]);
  }));

  return function postLogin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.postLogin = postLogin;

var getEdit = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var username, user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            username = req.session.user.username;

            if (username) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return", res.render("home", {
              err: "please login first"
            }));

          case 4:
            _context4.next = 6;
            return _User["default"].findOne({
              username: username
            });

          case 6:
            user = _context4.sent;
            return _context4.abrupt("return", res.render("edit", {
              user: user
            }));

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.render("home", {
              err: _context4.t0.message
            }));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function getEdit(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getEdit = getEdit;

var postEdit = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$body3, name, username, password;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$body3 = req.body, name = _req$body3.name, username = _req$body3.username, password = _req$body3.password;
            _context5.next = 4;
            return _User["default"].findOneAndUpdate({
              username: username
            }, {
              name: name,
              username: username,
              password: password
            }, {
              "new": true
            });

          case 4:
            return _context5.abrupt("return", res.redirect("/"));

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.render("home", {
              err: _context5.t0.message
            }));

          case 10:
            ;

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function postEdit(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.postEdit = postEdit;

var logout = function logout(req, res) {
  req.session.destroy();
  return res.redirect("/");
};

exports.logout = logout;