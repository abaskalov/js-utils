"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceUrlsWithLinks = void 0;
var replaceUrlsWithLinks = function (content) {
    if (content === void 0) { content = ""; }
    content = content.replace(/<a\b[^>]*>/gi, "").replace(/<\/a>/gi, "");
    var expMatch = /(\b(https?|):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
    return content.replace(expMatch, "<a target='_blank' href='$1'>$1</a>");
};
exports.replaceUrlsWithLinks = replaceUrlsWithLinks;
