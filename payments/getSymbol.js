"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSymbol = exports.symbols = void 0;
exports.symbols = {
    USD: "$",
    RUB: "₽",
    KZT: "₸",
    PLN: "zł",
    EUR: "€",
    CZK: "Kč",
    BRL: "R$",
    USDT: "₮",
};
var getSymbol = function (currency) {
    if (currency === void 0) { currency = ""; }
    return exports.symbols[currency] || currency;
};
exports.getSymbol = getSymbol;
