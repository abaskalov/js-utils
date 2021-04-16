"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimDecimal = void 0;
var trimDecimal = function (v, d) {
    if (v === void 0) { v = 0; }
    if (d === void 0) { d = 2; }
    var re = new RegExp("^-?\\d+(?:.\\d{0," + (d || -1) + "})?");
    try {
        var matched = v.toString().match(re);
        return matched !== null ? parseFloat(matched[0]) : 0;
    }
    catch (e) {
        return 0;
    }
};
exports.trimDecimal = trimDecimal;
