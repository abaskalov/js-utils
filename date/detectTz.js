"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectTz = void 0;
var detectTz = function () {
    return (Intl &&
        Intl.DateTimeFormat &&
        Intl.DateTimeFormat().resolvedOptions &&
        Intl.DateTimeFormat().resolvedOptions().timeZone) ||
        "UTC";
};
exports.detectTz = detectTz;
