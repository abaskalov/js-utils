"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUsd = void 0;
var getCurrency_1 = require("./getCurrency");
var isUsd = function (ps) { return getCurrency_1.getCurrency(ps) === "USD"; };
exports.isUsd = isUsd;
