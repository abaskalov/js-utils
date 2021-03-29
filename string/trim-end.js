"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimEnd = void 0;
var trimEnd = function (s, characters) {
    while (characters.includes(s.slice(-1))) {
        s = s.slice(0, -1);
    }
    return s;
};
exports.trimEnd = trimEnd;
