"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSymbolHasSpace = void 0;
var isSymbolHasSpace = function (currency) {
    return !["USD"].includes(currency);
};
exports.isSymbolHasSpace = isSymbolHasSpace;
