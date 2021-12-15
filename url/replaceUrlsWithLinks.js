"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceUrlsWithLinks = void 0;
var stripTags_1 = require("../string/stripTags");
var replaceUrlsWithLinks = function (content) {
    if (content === void 0) { content = ""; }
    return content.replace(/([^\S]|^|<b>|<i>|<strong>)(((https?:\/\/)|(www\.))(\S+|<\/b>|<\/i>|<\/strong>))/gi, function (match, space, url) {
        var hyperlink = (0, stripTags_1.stripTags)(url);
        if (!hyperlink.match("^https?://")) {
            hyperlink = "https://" + hyperlink;
        }
        return (space + '<a target="_blank" href="' + hyperlink + '">' + url + "</a>");
    });
};
exports.replaceUrlsWithLinks = replaceUrlsWithLinks;
