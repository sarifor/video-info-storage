"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localsMiddleware = void 0;

var localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.loggedUser = req.session.user;
  res.locals.loggedIn = req.session.loggedIn;
  next();
};

exports.localsMiddleware = localsMiddleware;