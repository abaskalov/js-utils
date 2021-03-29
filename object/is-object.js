"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
var isObject = function (item) {
    return item && typeof item === "object" && !Array.isArray(item);
};
exports.isObject = isObject;
