"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTz = void 0;
var changeTz = function (date, timeZone) {
    var invalidDate = new Date(date.toLocaleString("en-US", {
        timeZone: timeZone,
    }));
    var diff = date.getTime() - invalidDate.getTime();
    return new Date(date.getTime() + diff);
};
exports.changeTz = changeTz;
