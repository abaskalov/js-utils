"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDecimal = void 0;
var decimal_js_light_1 = __importDefault(require("decimal.js-light"));
var getDecimal = function (value) {
    if (value === void 0) { value = 0; }
    return new decimal_js_light_1.default(value).abs().toNumber();
};
exports.getDecimal = getDecimal;
