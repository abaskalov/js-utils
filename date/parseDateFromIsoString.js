"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDateFromIsoString = void 0;
var parseDateFromIsoString = function (s) {
    if (s === void 0) { s = ""; }
    var b = s.split(/\D+/);
    var _a = b[0], year = _a === void 0 ? "0" : _a, _b = b[1], month = _b === void 0 ? "0" : _b, _c = b[2], date = _c === void 0 ? "0" : _c, _d = b[3], hours = _d === void 0 ? "0" : _d, _e = b[4], minutes = _e === void 0 ? "0" : _e, _f = b[5], seconds = _f === void 0 ? "0" : _f, _g = b[6], ms = _g === void 0 ? "0" : _g;
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(date), Number(hours), Number(minutes), Number(seconds), Number(ms)));
};
exports.parseDateFromIsoString = parseDateFromIsoString;
