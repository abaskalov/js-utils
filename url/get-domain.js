"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomain = void 0;
function getDomain(url) {
    var result;
    var match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im);
    if (match) {
        result = match[1];
        match = result.match(/^[^.]+\.(.+\..+)$/);
        if (match) {
            result = match[1];
        }
    }
    return result;
}
exports.getDomain = getDomain;
