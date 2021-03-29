"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectTZ = void 0;
var detectTZ = function () {
    return (Intl &&
        Intl.DateTimeFormat &&
        Intl.DateTimeFormat().resolvedOptions &&
        Intl.DateTimeFormat().resolvedOptions().timeZone) ||
        "UTC";
};
exports.detectTZ = detectTZ;
