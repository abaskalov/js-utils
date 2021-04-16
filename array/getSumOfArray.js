"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSumOfArray = void 0;
var getSumOfArray = function (a, prop) {
    if (a === void 0) { a = []; }
    return a.reduce(function (a, b) { return a + b[prop]; }, 0);
};
exports.getSumOfArray = getSumOfArray;
