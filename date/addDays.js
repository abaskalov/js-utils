"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDays = void 0;
var addDays = function (days, date) {
    date = date || new Date();
    date.setDate(date.getDate() + days);
    return date;
};
exports.addDays = addDays;
