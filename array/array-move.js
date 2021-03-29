"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayMove = void 0;
var arrayMove = function (arr, oldIndex, newIndex) {
    if (newIndex >= arr.length) {
        var k = newIndex - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr;
};
exports.arrayMove = arrayMove;
