"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentificationTypeRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class IdentificationTypeRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.IdentificationType, dataSource);
    }
}
exports.IdentificationTypeRepository = IdentificationTypeRepository;
//# sourceMappingURL=identification-type.repository.js.map