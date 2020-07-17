"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = void 0;
var React = require("react");
function useForm(init) {
    var _a = React.useState(init), state = _a[0], setState = _a[1];
    var handleChange = function (key, val) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[key] = val, _a)));
    };
    return [state, handleChange];
}
exports.useForm = useForm;
//# sourceMappingURL=index.js.map