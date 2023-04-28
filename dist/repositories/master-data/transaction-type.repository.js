"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTypeRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class TransactionTypeRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.TransactionType, dataSource);
    }
}
exports.TransactionTypeRepository = TransactionTypeRepository;
//# sourceMappingURL=transaction-type.repository.js.map