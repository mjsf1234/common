"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHeaders = exports.ModifyResponseProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const utils_1 = require("../utils");
const constants_1 = require("../constants");
const he = require('he');
let ModifyResponseProvider = class ModifyResponseProvider {
    constructor(request) {
        this.request = request;
    }
    value() {
        // Use the lambda syntax to preserve the "this" scope for future calls!
        return (response, result) => {
            this.addHeaders(response, result);
        };
    }
    /**
     * @param response - The response object used to reply to the  client.
     * @param result - The result of the operation carried out by the controller's
     * handling function.
     */
    addHeaders(response, result) {
        var _a, _b;
        // for file downloading;
        let downloadHeader = response.getHeader('x-rta-file');
        if (downloadHeader) {
            (0, exports.setHeaders)(response);
            return response;
        }
        if (!result) {
            // HSTS Headers
            //response.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
            return response.end();
        }
        //set required headers to the response object
        (0, exports.setHeaders)(response);
        //sanitize json
        let isInterNalRequest = false;
        const requestHeaders = response.req.headers;
        const API_KEY = ((_b = (_a = requestHeaders["authorization"]) !== null && _a !== void 0 ? _a : requestHeaders["Authorization"]) !== null && _b !== void 0 ? _b : null);
        if (API_KEY && process.env.COMMON_API_KEY == API_KEY) {
            isInterNalRequest = true;
        }
        const responseContentType = response.getHeader('Content-type');
        //encoding JSON string. This will convert characters like < > to &lt; and &gt;. Similar logic has been added to the clients to handle this
        if (!isInterNalRequest &&
            !Buffer.isBuffer(result) &&
            responseContentType &&
            typeof responseContentType == 'string' &&
            responseContentType.includes('application/json')) {
            result = JSON.parse(he
                .encode(JSON.stringify(result), { useNamedReferences: true })
                .replace(/\&quot;/g, '"')
                .replace(/\+/g, '&plus;')
                .replace(/\(/g, '&lpar;')
                .replace(/\)/g, '&rpar;'));
        }
        if (!isInterNalRequest &&
            !Buffer.isBuffer(result) &&
            responseContentType &&
            typeof responseContentType == 'string' &&
            responseContentType.includes('application/json') &&
            constants_1.Option.GLOBALOPTIONS.BOOLEANVARS[process.env.REQ_RES_ENCRYPTION] &&
            !constants_1.Option.GLOBALOPTIONS.URIEXCLUSIONLISTFROMREQUESTRESPONSEENCRYPTION.includes(this.request.url.split('?')[0])) {
            const plainKey = utils_1.CryptoUtils.generateRandomSecretKey();
            const cipheredKey = (0, utils_1.encodeString)(plainKey);
            response.setHeader('cipheredKey', cipheredKey);
            response.setHeader('Access-Control-Expose-Headers', 'cipheredKey');
            const encryptedResult = { payload: utils_1.CryptoUtils.symmetricEncryption(JSON.stringify(result), plainKey).toString() };
            result = encryptedResult;
        }
        response.send(result);
    }
};
ModifyResponseProvider = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)(rest_1.RestBindings.Http.REQUEST)),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ModifyResponseProvider);
exports.ModifyResponseProvider = ModifyResponseProvider;
const setHeaders = (response) => {
    // HSTS Headers
    response.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    response.setHeader('X-Frame-Options', 'DENY');
    // Preferred over X-XSS-Protection
    response.setHeader('Content-Security-Policy', 'default-src https:');
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Content-Security-Policy', "default-src 'self'");
    response.setHeader('cache-control', 'no-store');
    response.setHeader('X-XSS-Protection', '0');
    //If the request object's content type is application/xml then we set the response's content type to application/xml as well
    if (response.req.headers['content-type'] == 'application/xml') {
        response.setHeader('Content-type', 'application/xml');
    }
    if (!response.getHeader('Content-type')) {
        response.setHeader('Content-type', 'application/json;charset=utf-8');
    }
};
exports.setHeaders = setHeaders;
//# sourceMappingURL=modify-response.provider.js.map