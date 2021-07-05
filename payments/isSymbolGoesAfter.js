"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSymbolGoesAfter = void 0;
var isSymbolGoesAfter = function (currency) {
    return !["USD", "BRL"].includes(currency);
};
exports.isSymbolGoesAfter = isSymbolGoesAfter;
