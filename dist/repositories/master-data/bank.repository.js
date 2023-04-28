"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let BankRepository = class BankRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, bankBranchRepositoryGetter) {
        super(models_1.Bank, dataSource);
        this.bankBranches = this.createHasManyRepositoryFactoryFor('bankBranches', bankBranchRepositoryGetter);
        this.registerInclusionResolver('bankBranches', this.bankBranches.inclusionResolver);
    }
};
BankRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('BankBranchRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], BankRepository);
exports.BankRepository = BankRepository;
//# sourceMappingURL=bank.repository.js.map