"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSet = void 0;
var isUnset_1 = require("./isUnset");
var isSet = function (o) { return !(0, isUnset_1.isUnset)(o); };
exports.isSet = isSet;
