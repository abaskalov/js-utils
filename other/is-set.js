"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSet = void 0;
var is_unset_1 = require("./is-unset");
var isSet = function (o) { return !is_unset_1.isUnset(o); };
exports.isSet = isSet;
