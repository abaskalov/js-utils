"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSThousandsSeparator = void 0;
var addSThousandsSeparator = function (number, separator) {
    if (number === void 0) { number = 0; }
    if (separator === void 0) { separator = " "; }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};
exports.addSThousandsSeparator = addSThousandsSeparator;
