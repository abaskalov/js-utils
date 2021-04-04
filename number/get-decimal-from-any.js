"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDecimalFromAny = void 0;
var decimal_js_light_1 = __importDefault(require("decimal.js-light"));
var getDecimalFromAny = function (value) {
    if (value === void 0) { value = 0; }
    try {
        return new decimal_js_light_1.default(value);
    }
    catch (e) { }
    return new decimal_js_light_1.default(0);
};
exports.getDecimalFromAny = getDecimalFromAny;
