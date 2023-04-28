"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathParamsValidations = void 0;
const rest_error_1 = require("./rest-error");
class PathParamsValidations {
    static idValidations(id) {
        if (!id)
            throw new rest_error_1.RestError(422, "The requested path is invalid", { details: `Validation failed for path parameter ${id}` });
        if (id < 1 || id > 2147483647) {
            throw new rest_error_1.RestError(422, "The requested path is invalid", { details: `Validation failed for path parameter ${id}` });
        }
        if ((id % 1 != 0)) {
            throw new rest_error_1.RestError(422, "The requested path is invalid", { details: `Validation failed for path parameter ${id}` });
        }
    }
    static limitValidations(limit) {
        // if(!limit)  throw new RestError(422, "The requested path is invalid", { details: `Validation failed for Limit ${limit}`})
        if (limit == undefined || limit == null)
            return;
        if (limit < 1 || limit > 100) {
            throw new rest_error_1.RestError(422, "The requested path is invalid", { details: `Validation failed for Limit ${limit}` });
        }
        if ((limit % 1 != 0)) {
            throw new rest_error_1.RestError(422, "The requested path is invalid", { details: `Validation failed for Limit ${limit}` });
        }
    }
    static genericNumericValidations(numericParam, required = false) {
        //undefined or null
        if (numericParam == undefined || numericParam == null) {
            //if required not requires
            if (!required) {
                return;
            }
            else {
                throw new rest_error_1.RestError(422, "The requested path is invalid", { details: `Validation failed for Numeric Param ${numericParam}` });
            }
        }
        if (numericParam < 1 || numericParam > 2147483647) {
            throw new rest_error_1.RestError(422, "The requested path is invalid", { details: `Validation failed for Numeric Param ${numericParam}` });
        }
        if ((numericParam % 1 != 0)) {
            throw new rest_error_1.RestError(422, "The requested path is invalid", { details: `Validation failed for Numeric Param ${numericParam}` });
        }
    }
}
exports.PathParamsValidations = PathParamsValidations;
//# sourceMappingURL=path-params-validations.js.map