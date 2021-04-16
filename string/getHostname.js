"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHostname = void 0;
var getHostname = function (s) {
    if (s === void 0) { s = ""; }
    return s.replace(/(http(s)?:)?\/\//, "").split(/[/?#]/)[0];
};
exports.getHostname = getHostname;
