"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postToUrlClient = void 0;
var postToUrlClient = function (path, params) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", path);
    for (var key in params) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
    }
    document.body.appendChild(form);
    form.submit();
};
exports.postToUrlClient = postToUrlClient;
