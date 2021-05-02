"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitDateString = void 0;
var splitDateString = function (date) {
    var falsyValue = {
        hours: "0",
        minutes: "0",
        seconds: "0",
        month: "0",
        day: "0",
        year: "0",
    };
    var splitDate = date.split(" ");
    if (splitDate.length < 2) {
        return falsyValue;
    }
    var time = splitDate[1];
    var hms = time.split(":");
    if (hms.length < 3) {
        return falsyValue;
    }
    var hours = hms[0].padStart(2, "0");
    hours = hours === "24" ? "00" : hours;
    var minutes = hms[1].padStart(2, "0");
    var seconds = hms[2].padStart(2, "0");
    var mdy = splitDate[0].split("/");
    if (mdy.length < 3) {
        return falsyValue;
    }
    var month = parseInt(mdy[0]).toString().padStart(2, "0");
    var day = parseInt(mdy[1]).toString().padStart(2, "0");
    var year = parseInt(mdy[2]).toString();
    return { hours: hours, minutes: minutes, seconds: seconds, month: month, day: day, year: year };
};
exports.splitDateString = splitDateString;
