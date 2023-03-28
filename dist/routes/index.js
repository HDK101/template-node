"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _UserController = _interopRequireDefault(require("../app/controllers/UserController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _default(fastify, opts, done) {
  fastify.post('/users', _UserController["default"].store);
  fastify.get('/users', _UserController["default"].index);
  done();
}