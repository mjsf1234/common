"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountTypeRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class BankAccountTypeRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.BankAccountType, dataSource);
    }
}
exports.BankAccountTypeRepository = BankAccountTypeRepository;
//# sourceMappingURL=bank-account-type.repository.js.map