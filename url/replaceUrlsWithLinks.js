"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceUrlsWithLinks = void 0;
var replaceUrlsWithLinks = function (content) {
    if (content === void 0) { content = ""; }
    return content.replace(/([^\S]|^)(((https?:\/\/)|(www\.))(\S+))/gi, function (match, space, url) {
        var hyperlink = url;
        if (!hyperlink.match("^https?://")) {
            hyperlink = "http://" + hyperlink;
        }
        return (space + '<a target="_blank" href="' + hyperlink + '">' + url + "</a>");
    });
};
exports.replaceUrlsWithLinks = replaceUrlsWithLinks;
