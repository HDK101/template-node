"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var database = new _sequelize.Sequelize('sqlite::memory:');
var _default = database;
exports["default"] = _default;