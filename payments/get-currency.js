"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrency = void 0;
var systems = {
    PR: "USD",
    PM: "USD",
    USDTOmni: "USDT",
    USDTERC20: "USDT",
};
var getCurrency = function (ps) { return systems[ps] || ps; };
exports.getCurrency = getCurrency;
