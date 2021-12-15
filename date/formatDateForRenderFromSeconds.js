"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateForRenderFromSeconds = void 0;
var formatDateForRenderFromObject_1 = require("./formatDateForRenderFromObject");
var formatDateForRenderFromSeconds = function (seconds, _a) {
    if (seconds === void 0) { seconds = 0; }
    var _b = _a === void 0 ? {} : _a, tz = _b.tz, format = _b.format;
    if (!seconds || typeof seconds !== "number") {
        return "Invalid Date";
    }
    return (0, formatDateForRenderFromObject_1.formatDateForRenderFromObject)(new Date(seconds * 1000), {
        tz: tz,
        format: format,
    });
};
exports.formatDateForRenderFromSeconds = formatDateForRenderFromSeconds;
