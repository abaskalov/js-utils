"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRelativeUrl = void 0;
var isRelativeUrl = function (u) {
    return Boolean(u &&
        u.length &&
        /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(u));
};
exports.isRelativeUrl = isRelativeUrl;
