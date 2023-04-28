"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecryptBodyJsonParser = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const body_parser_1 = require("body-parser");
const type_is_1 = require("type-is");
const crypto_js_1 = (0, tslib_1.__importDefault)(require("crypto-js"));
const rest_1 = require("@loopback/rest");
const utils_1 = require("../utils");
const constants_1 = require("../constants");
let DecryptBodyJsonParser = class DecryptBodyJsonParser {
    constructor(options = {}) {
        var _a, _b;
        this.name = rest_1.builtinParsers.json;
        const jsonOptions = (0, rest_1.getParserOptions)('json', options);
        const rawOptions = (0, rest_1.getParserOptions)('raw', options);
        const prohibitedKeys = ['__proto__', 'constructor.prototype', ...((_b = (_a = options.validation) === null || _a === void 0 ? void 0 : _a.prohibitedKeys) !== null && _b !== void 0 ? _b : [])];
        jsonOptions.reviver = (0, rest_1.sanitizeJsonParse)(jsonOptions.reviver, prohibitedKeys);
        this.jsonParser = (0, body_parser_1.json)(jsonOptions);
        this.textParser = (0, body_parser_1.text)(rawOptions);
    }
    supports(mediaType) {
        return !!(0, type_is_1.is)(mediaType, '*/json', '*/*+json', 'application/xml');
    }
    async parse(request) {
        let body;
        if (request.headers['content-type'] === 'application/xml') {
            body = await (0, rest_1.invokeBodyParserMiddleware)(this.textParser, request);
            return { value: { requestXML: body } };
        }
        else {
            let body = await (0, rest_1.invokeBodyParserMiddleware)(this.jsonParser, request);
            // https://github.com/expressjs/body-parser/blob/master/lib/types/json.js#L71-L76
            const contentLength = request.get('content-length');
            if (contentLength != null && +contentLength === 0) {
                body = undefined;
            }
            body = this.decryptRequestBody(body, request);
            return { value: body };
        }
    }
    decryptRequestBody(body, request) {
        if (constants_1.Option.GLOBALOPTIONS.BOOLEANVARS[process.env.REQ_RES_ENCRYPTION] &&
            ['POST', 'PUT', 'PATCH'].indexOf(request.method) > -1 &&
            body) {
            try {
                const decipheredKey = (0, utils_1.decodeString)(lodash_1.default.get(request, 'headers.cipheredkey'));
                const cipheredRequestPayload = body.payload;
                const bytes = utils_1.CryptoUtils.symmetricDecryption(cipheredRequestPayload, decipheredKey);
                let decipheredRequestPayload = JSON.parse(bytes.toString(crypto_js_1.default.enc.Utf8));
                if (typeof decipheredRequestPayload === 'string') {
                    decipheredRequestPayload = JSON.parse(decipheredRequestPayload);
                }
                body = decipheredRequestPayload;
            }
            catch (err) {
                utils_1.LoggingUtils.error('Error parsing payload!');
                utils_1.LoggingUtils.error(err);
                throw new Error('Bad Request Payload');
            }
        }
        return body;
    }
};
DecryptBodyJsonParser = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)(rest_1.RestBindings.REQUEST_BODY_PARSER_OPTIONS, { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], DecryptBodyJsonParser);
exports.DecryptBodyJsonParser = DecryptBodyJsonParser;
//# sourceMappingURL=decrypt-body-json.parser.js.map