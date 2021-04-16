"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToObject = void 0;
var arrayToObject = function (array, _a) {
    if (array === void 0) { array = []; }
    var _b = _a === void 0 ? {} : _a, _c = _b.key, key = _c === void 0 ? "id" : _c, vKey = _b.vKey, fn = _b.fn;
    return Array.isArray(array)
        ? array
            .filter(function (el) { return typeof el === "object" && el !== null; })
            .reduce(function (acc, curr) {
            acc[curr[key]] = vKey ? (fn ? fn(curr[vKey]) : curr[vKey]) : curr;
            return acc;
        }, {})
        : array;
};
exports.arrayToObject = arrayToObject;
