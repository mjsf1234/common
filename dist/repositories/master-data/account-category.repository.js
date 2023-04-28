"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCategoryRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class AccountCategoryRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.AccountCategory, dataSource);
    }
}
exports.AccountCategoryRepository = AccountCategoryRepository;
//# sourceMappingURL=account-category.repository.js.map