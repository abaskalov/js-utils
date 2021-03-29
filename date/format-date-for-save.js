"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateForSave = void 0;
var convert_date_to_string_by_tz_1 = require("./convert-date-to-string-by-tz");
var split_date_string_1 = require("./split-date-string");
var parse_date_from_input_string_1 = require("./parse-date-from-input-string");
var change_tz_1 = require("./change-tz");
var formatDateForSave = function (date, tz) {
    var dateObject = parse_date_from_input_string_1.parseDateFromInputString(date);
    var dateObjectTz = change_tz_1.changeTz(dateObject, tz);
    var dateStringTz = convert_date_to_string_by_tz_1.convertDateToStringByTz(dateObjectTz);
    var _a = split_date_string_1.splitDateString(dateStringTz), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, month = _a.month, day = _a.day, year = _a.year;
    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds + ".000 +0000 UTC";
};
exports.formatDateForSave = formatDateForSave;
