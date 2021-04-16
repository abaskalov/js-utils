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
    USDTOmni: "USDT",
    USDTERC20: "USDT",
};
var getSymbol = function (currency) {
    return exports.symbols[currency] || currency;
};
exports.getSymbol = getSymbol;
