"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullString = void 0;
var decimal_js_light_1 = __importDefault(require("decimal.js-light"));
var trim_end_1 = require("../string/trim-end");
var getFullString = function (number) {
    if (number === void 0) { number = 0; }
    var toStringVal = number.toString();
    return /-/.test(toStringVal)
        ? trim_end_1.trimEnd(new decimal_js_light_1.default(toStringVal).toFixed(20).toString(), "0.,")
        : toStringVal;
};
exports.getFullString = getFullString;
