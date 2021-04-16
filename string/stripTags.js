"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripTags = void 0;
var stripTags = function (s) {
    if (s === void 0) { s = ""; }
    return s.replace(/<[^>]+>/g, "");
};
exports.stripTags = stripTags;
