"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineRequestUtils = void 0;
const __1 = require("..");
const __2 = require("..");
class EngineRequestUtils {
}
exports.EngineRequestUtils = EngineRequestUtils;
_a = EngineRequestUtils;
EngineRequestUtils.checkRequestToEngineStatus = async (requestToEngineRepository, rowId) => {
    try {
        let data = await requestToEngineRepository.findOne({
            where: {
                id: rowId
            }
        });
        if (data === null || data === void 0 ? void 0 : data.isParallel) {
            return { processFlag: true, eventType: data === null || data === void 0 ? void 0 : data.eventType, parameters: data === null || data === void 0 ? void 0 : data.parameters };
        }
        let prcoessingData = await requestToEngineRepository.find({
            where: {
                eventType: data === null || data === void 0 ? void 0 : data.eventType,
                status: __2.Option.GLOBALOPTIONS.REQUESTTOENGINESTATUS['processing'].value
            }
        });
        if (prcoessingData.length > 0) {
            return { processFlag: false, eventType: data === null || data === void 0 ? void 0 : data.eventType, parameters: data === null || data === void 0 ? void 0 : data.parameters };
        }
        return { processFlag: true, eventType: data === null || data === void 0 ? void 0 : data.eventType, parameters: data === null || data === void 0 ? void 0 : data.parameters };
    }
    catch (error) {
        __1.LoggingUtils.error(error);
    }
};
EngineRequestUtils.updateRequestToEngineStatus = async (requestToEngineRepository, rowId, status, remarks = '') => {
    try {
        return await requestToEngineRepository.updateById(rowId, { status: status, remarks: remarks });
    }
    catch (error) {
        __1.LoggingUtils.error(error);
    }
};
//# sourceMappingURL=engine-request-from-service.utils.js.map