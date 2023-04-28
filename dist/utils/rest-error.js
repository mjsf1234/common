"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestError = void 0;
class RestError {
    constructor(status, message, extra) {
        this.status = status;
        this.message = message;
        this.extra = extra;
    }
}
exports.RestError = RestError;
//# sourceMappingURL=rest-error.js.map