"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClosestArrayNumber = void 0;
var getClosestArrayNumber = function (arr, num) {
    return (arr.reduce(function (acc, val) {
        if (Math.abs(val - num) < Math.abs(acc)) {
            return val - num;
        }
        else {
            return acc;
        }
    }, Infinity) + num);
};
exports.getClosestArrayNumber = getClosestArrayNumber;
