"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameUrl = void 0;
var isSameUrl = function (a, b) {
    return a.split("?")[0].replace(/\/+$/, "") === b.split("?")[0].replace(/\/+$/, "");
};
exports.isSameUrl = isSameUrl;
