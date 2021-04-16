"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nl2P = void 0;
var nl2P = function (s) {
    if (s === void 0) { s = ""; }
    return "<p>" +
        s.replace(/\n{2}/g, "&nbsp;</p><p>").replace(/\n/g, "&nbsp;<br />") +
        "</p>";
};
exports.nl2P = nl2P;
