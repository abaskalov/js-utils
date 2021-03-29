"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeQueryParams = void 0;
var removeQueryParams = function (query, params) {
    if (query === void 0) { query = {}; }
    if (params === void 0) { params = []; }
    var clone = Object.assign({}, query);
    params.forEach(function (param) {
        if (clone[param]) {
            delete clone[param];
        }
    });
    return clone;
};
exports.removeQueryParams = removeQueryParams;
