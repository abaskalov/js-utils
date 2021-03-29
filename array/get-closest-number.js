"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClosestMNumber = void 0;
var getClosestMNumber = function (arr, num) {
    return (arr.reduce(function (acc, val) {
        if (Math.abs(val - num) < Math.abs(acc)) {
            return val - num;
        }
        else {
            return acc;
        }
    }, Infinity) + num);
};
exports.getClosestMNumber = getClosestMNumber;
