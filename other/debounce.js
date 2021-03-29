"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
var debounce = function (func, wait) {
    var timeout;
    return function () {
        var later = function () {
            timeout = null;
        };
        var callNow = !timeout;
        timeout && clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);
        if (callNow)
            func();
    };
};
exports.debounce = debounce;
