"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
var range = function (_a) {
    var _b = _a.start, start = _b === void 0 ? 1 : _b, end = _a.end, _c = _a.step, step = _c === void 0 ? 1 : _c, _d = _a.reverse, reverse = _d === void 0 ? false : _d;
    var arr = [];
    for (var i = start; i <= end; i += step) {
        arr.push(i);
    }
    return reverse ? arr.reverse() : arr;
};
exports.range = range;
