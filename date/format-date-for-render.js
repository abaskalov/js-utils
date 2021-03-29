"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateForRender = void 0;
var DateFormatEnum_1 = require("./DateFormatEnum");
var parse_date_from_iso_string_1 = require("./parse-date-from-iso-string");
var convert_date_to_string_by_tz_1 = require("./convert-date-to-string-by-tz");
var split_date_string_1 = require("./split-date-string");
var formatDateForRender = function (date, _a) {
    var _b = _a === void 0 ? {} : _a, tz = _b.tz, format = _b.format;
    if (!date) {
        return "Invalid Date";
    }
    var dateObject = parse_date_from_iso_string_1.parseDateFromIsoString(date);
    var dateStringTz = convert_date_to_string_by_tz_1.convertDateToStringByTz(dateObject, tz);
    var _c = split_date_string_1.splitDateString(dateStringTz), hours = _c.hours, minutes = _c.minutes, month = _c.month, day = _c.day, year = _c.year;
    switch (format) {
        case DateFormatEnum_1.DateFormatEnum.Short:
            return day + "." + month + " " + hours + ":" + minutes;
        case DateFormatEnum_1.DateFormatEnum.Date:
            return day + "." + month + "." + year;
        default:
            return day + "." + month + "." + year + " " + hours + ":" + minutes;
    }
};
exports.formatDateForRender = formatDateForRender;
