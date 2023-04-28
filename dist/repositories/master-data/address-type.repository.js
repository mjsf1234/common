"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressTypeRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class AddressTypeRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.AddressType, dataSource);
    }
}
exports.AddressTypeRepository = AddressTypeRepository;
//# sourceMappingURL=address-type.repository.js.map