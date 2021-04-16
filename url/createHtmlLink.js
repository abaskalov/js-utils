"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHtmlLink = void 0;
var getHostname_1 = require("../string/getHostname");
var createHtmlLink = function (_a) {
    var url = _a.url, inner = _a.inner, _b = _a.domain, domain = _b === void 0 ? false : _b, _c = _a.blank, blank = _c === void 0 ? true : _c, _d = _a.noopener, noopener = _d === void 0 ? true : _d, _e = _a.email, email = _e === void 0 ? false : _e, _f = _a.phone, phone = _f === void 0 ? false : _f;
    var prefix = email ? "mailto:" : phone ? "tel:" : "";
    return "<a " + (noopener ? 'rel="noopener"' : "") + " target=\"" + (blank ? "_blank" : "_self") + "\" href=\"" + prefix + url + "\">" + (domain ? getHostname_1.getHostname(url) : inner || url) + "</a>";
};
exports.createHtmlLink = createHtmlLink;
