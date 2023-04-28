"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionAppFileRepository = void 0;
const __1 = require("..");
const models_1 = require("../../models");
class TransactionAppFileRepository extends __1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.TransactionAppFile, dataSource);
    }
}
exports.TransactionAppFileRepository = TransactionAppFileRepository;
//# sourceMappingURL=transaction-app-file.repository.js.map