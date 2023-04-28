"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCronController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const log_api_call_utils_1 = require("../../../utils/log-api-call-utils");
const facades_1 = require("../facades");
const constants_1 = require("../../../constants");
const utils_1 = require("../../../utils");
let BaseCronController = class BaseCronController {
    constructor(request, additionalHeaders, baseCronFacade) {
        this.request = request;
        this.additionalHeaders = additionalHeaders;
        this.baseCronFacade = baseCronFacade;
    }
    async processCron(gcProps) {
        var _a;
        const { logParams } = this.additionalHeaders;
        const headers = this.request.headers;
        const parseObj = JSON.parse(utils_1.CryptoUtils.decrypt(gcProps.toString('utf8')));
        const response = await this.baseCronFacade.processBody(parseObj, headers);
        log_api_call_utils_1.LogApiCallUtils.sendMessageIncomingApiCall({
            url: logParams.url,
            request: parseObj,
            response: response,
            success: (_a = response.success) !== null && _a !== void 0 ? _a : false,
            externalSystemName: constants_1.Option.GLOBALOPTIONS.EXTERNALAPISYSTEMNAME.GOOGLE_SCHEDULER
        });
        return response;
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/invokeCron'),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/octet-stream': {}
        }
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BaseCronController.prototype, "processCron", null);
BaseCronController = (0, tslib_1.__decorate)([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    (0, tslib_1.__param)(0, (0, core_1.inject)(rest_1.RestBindings.Http.REQUEST)),
    (0, tslib_1.__param)(1, (0, core_1.inject)('additionalHeaders')),
    (0, tslib_1.__param)(2, (0, core_1.service)(facades_1.BaseCronFacade)),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, facades_1.BaseCronFacade])
], BaseCronController);
exports.BaseCronController = BaseCronController;
//# sourceMappingURL=base-cron.controller.js.map