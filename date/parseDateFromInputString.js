"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDateFromInputString = void 0;
// 01.12.2020 15:10
var parseDateFromInputString = function (s) {
    if (s === void 0) { s = ""; }
    var b = s.split(/\D+/);
    var _a = b[0], date = _a === void 0 ? "0" : _a, _b = b[1], month = _b === void 0 ? "0" : _b, _c = b[2], year = _c === void 0 ? "0" : _c, _d = b[3], hours = _d === void 0 ? "0" : _d, _e = b[4], minutes = _e === void 0 ? "0" : _e;
    return new Date(Number(year), Number(month) - 1, Number(date), Number(hours), Number(minutes));
};
exports.parseDateFromInputString = parseDateFromInputString;
