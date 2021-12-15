"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateForRenderFromObject = void 0;
var DateFormatEnum_1 = require("./DateFormatEnum");
var convertDateToStringByTz_1 = require("./convertDateToStringByTz");
var splitDateString_1 = require("./splitDateString");
var formatDateForRenderFromObject = function (date, _a) {
    var _b = _a === void 0 ? {} : _a, tz = _b.tz, format = _b.format;
    if (!date || !(date instanceof Date)) {
        return "Invalid Date";
    }
    var dateStringTz = (0, convertDateToStringByTz_1.convertDateToStringByTz)(date, tz);
    var _c = (0, splitDateString_1.splitDateString)(dateStringTz), hours = _c.hours, minutes = _c.minutes, month = _c.month, day = _c.day, year = _c.year;
    switch (format) {
        case DateFormatEnum_1.DateFormatEnum.Short:
            return "".concat(day, ".").concat(month, " ").concat(hours, ":").concat(minutes);
        case DateFormatEnum_1.DateFormatEnum.Date:
            return "".concat(day, ".").concat(month, ".").concat(year);
        case DateFormatEnum_1.DateFormatEnum.Time:
            return "".concat(hours, ":").concat(minutes);
        default:
            return "".concat(day, ".").concat(month, ".").concat(year, " ").concat(hours, ":").concat(minutes);
    }
};
exports.formatDateForRenderFromObject = formatDateForRenderFromObject;
