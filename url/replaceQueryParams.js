"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceQueryParams = void 0;
var replaceQueryParams = function (query, params) {
    if (query === void 0) { query = {}; }
    if (params === void 0) { params = {}; }
    return Object.assign(Object.assign({}, query), params);
};
exports.replaceQueryParams = replaceQueryParams;
