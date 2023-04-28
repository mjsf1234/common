"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestToEngineRepository = void 0;
const __1 = require("..");
const models_1 = require("../../models");
class RequestToEngineRepository extends __1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.RequestToEngine, dataSource);
    }
}
exports.RequestToEngineRepository = RequestToEngineRepository;
//# sourceMappingURL=request-to-engines.repository.js.map