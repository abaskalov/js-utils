"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateForSave = void 0;
var convertDateToStringByTz_1 = require("./convertDateToStringByTz");
var splitDateString_1 = require("./splitDateString");
var parseDateFromInputString_1 = require("./parseDateFromInputString");
var changeTz_1 = require("./changeTz");
var formatDateForSave = function (date, tz) {
    var dateObject = (0, parseDateFromInputString_1.parseDateFromInputString)(date);
    var dateObjectTz = (0, changeTz_1.changeTz)(dateObject, tz);
    var dateStringTz = (0, convertDateToStringByTz_1.convertDateToStringByTz)(dateObjectTz);
    var _a = (0, splitDateString_1.splitDateString)(dateStringTz), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, month = _a.month, day = _a.day, year = _a.year;
    return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds, ".000 +0000 UTC");
};
exports.formatDateForSave = formatDateForSave;
