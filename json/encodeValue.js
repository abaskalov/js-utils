"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeValue = void 0;
var encodeValue = function (val) {
    return typeof val === "string" ? val : JSON.stringify(val);
};
exports.encodeValue = encodeValue;
