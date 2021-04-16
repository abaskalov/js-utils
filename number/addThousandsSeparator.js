"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addThousandsSeparator = void 0;
var addThousandsSeparator = function (number, separator) {
    if (number === void 0) { number = 0; }
    if (separator === void 0) { separator = " "; }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};
exports.addThousandsSeparator = addThousandsSeparator;
