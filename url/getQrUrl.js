"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQrUrl = void 0;
var getQrUrl = function (_a) {
    var data = _a.data, _b = _a.width, width = _b === void 0 ? 150 : _b, _c = _a.height, height = _c === void 0 ? 150 : _c;
    return "https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&size=" + width + "x" + height + "&data=" + data;
};
exports.getQrUrl = getQrUrl;
