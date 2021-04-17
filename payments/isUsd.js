"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUsd = void 0;
var isUsd = function (ps) {
    if (ps === void 0) { ps = ""; }
    return !!ps.match(/usd/i);
};
exports.isUsd = isUsd;
