"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padStart = void 0;
var padStart = function (string, width, padding) {
    if (string === void 0) { string = ""; }
    if (width === void 0) { width = 2; }
    if (padding === void 0) { padding = "0"; }
    return width <= string.length ? string : exports.padStart(padding + string, width, padding);
};
exports.padStart = padStart;
