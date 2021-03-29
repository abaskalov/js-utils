"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimDecimal = void 0;
var trimDecimal = function (v, d) {
    if (v === void 0) { v = 0; }
    if (d === void 0) { d = 2; }
    var a = ((v * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d);
    return a * 1;
};
exports.trimDecimal = trimDecimal;
