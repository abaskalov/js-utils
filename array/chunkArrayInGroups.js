"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkArrayInGroups = void 0;
var chunkArrayInGroups = function (arr, size) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
};
exports.chunkArrayInGroups = chunkArrayInGroups;
