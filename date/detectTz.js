"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectTz = void 0;
var detectTz = function () {
    var tz = "UTC";
    try {
        tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    catch (e) { }
    return tz;
};
exports.detectTz = detectTz;
