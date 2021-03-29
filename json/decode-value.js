"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeValue = void 0;
var decodeValue = function (val) {
    if (typeof val === "string") {
        try {
            return JSON.parse(val);
        }
        catch (_) { }
    }
    return val;
};
exports.decodeValue = decodeValue;
