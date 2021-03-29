"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUsd = void 0;
var get_currency_1 = require("./get-currency");
var isUsd = function (ps) { return get_currency_1.getCurrency(ps) === "USD"; };
exports.isUsd = isUsd;
