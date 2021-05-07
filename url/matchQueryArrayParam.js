"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchQueryArrayParam = void 0;
var matchQueryArrayParam = function (s, p) {
    if (s === void 0) { s = ""; }
    if (p === void 0) { p = ""; }
    return s.match(new RegExp("(" + p + ")(\\[(\\w+)\\])+")) || [];
};
exports.matchQueryArrayParam = matchQueryArrayParam;
