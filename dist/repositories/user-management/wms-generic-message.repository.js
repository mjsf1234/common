"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WmsGenericMessageRepository = void 0;
const __1 = require("..");
const models_1 = require("../../models");
class WmsGenericMessageRepository extends __1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.WmsGenericMessage, dataSource);
    }
}
exports.WmsGenericMessageRepository = WmsGenericMessageRepository;
//# sourceMappingURL=wms-generic-message.repository.js.map