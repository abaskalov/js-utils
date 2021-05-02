"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDateToStringByTz = void 0;
var convertDateToStringByTz = function (d, timeZone) {
    if (d === void 0) { d = new Date(); }
    if (timeZone === void 0) { timeZone = "UTC"; }
    try {
        return d.toLocaleString("en-US", { hour12: false, timeZone: timeZone });
    }
    catch (e) {
        return "";
    }
};
exports.convertDateToStringByTz = convertDateToStringByTz;
