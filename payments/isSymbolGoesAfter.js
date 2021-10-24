"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSymbolGoesAfter = void 0;
var isSymbolGoesAfter = function (currency) {
    return !["USD", "USDT", "BRL"].includes(currency);
};
exports.isSymbolGoesAfter = isSymbolGoesAfter;
