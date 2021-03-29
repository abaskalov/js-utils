"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ucFirst = void 0;
var ucFirst = function (s) {
    if (s === void 0) { s = ""; }
    return s.charAt(0).toUpperCase() + s.slice(1);
};
exports.ucFirst = ucFirst;
