"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstWordBold = void 0;
var firstWordBold = function (s, strict) {
    if (s === void 0) { s = ""; }
    if (strict === void 0) { strict = false; }
    var split = s.split(" ");
    if (split.length >= 1) {
        var start = split.splice(0, split[0].length <= 3 && split.length > 1 && !strict ? 2 : 1);
        return "<b>" + start.join(" ") + "</b> " + split.join(" ");
    }
    return s;
};
exports.firstWordBold = firstWordBold;
