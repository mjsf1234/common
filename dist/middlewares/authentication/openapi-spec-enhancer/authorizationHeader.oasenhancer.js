"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationHeaderOASEnhancer = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
/**
 * A spec enhancer to add OpenAPI info spec
 */
let AuthorizationHeaderOASEnhancer = class AuthorizationHeaderOASEnhancer {
    constructor() {
        this.name = 'authHeader';
    }
    //this function modifies the current open api spec and adds the option of adding the authorization header in swagger
    modifySpec(spec) {
        const specCopy = Object.assign({}, spec);
        if (!("components" in specCopy))
            specCopy.components = {}; //add components if not present
        specCopy.components.securitySchemes = {
            ApiKeyAuth: {
                type: "apiKey",
                in: "header",
                name: "Authorization"
            }
        };
        specCopy.security = [{ ApiKeyAuth: [] }];
        return specCopy;
    }
};
AuthorizationHeaderOASEnhancer = (0, tslib_1.__decorate)([
    (0, core_1.injectable)(rest_1.asSpecEnhancer)
], AuthorizationHeaderOASEnhancer);
exports.AuthorizationHeaderOASEnhancer = AuthorizationHeaderOASEnhancer;
//# sourceMappingURL=authorizationHeader.oasenhancer.js.map