"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankBranchRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let BankBranchRepository = class BankBranchRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, bankRepositoryGetter, addressRepositoryGetter) {
        super(models_1.BankBranch, dataSource);
        this.bank = this.createBelongsToAccessorFor('bank', bankRepositoryGetter);
        this.address = this.createBelongsToAccessorFor('address', addressRepositoryGetter);
        this.registerInclusionResolver('bank', this.bank.inclusionResolver);
        this.registerInclusionResolver('address', this.address.inclusionResolver);
    }
};
BankBranchRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('BankRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AddressRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], BankBranchRepository);
exports.BankBranchRepository = BankBranchRepository;
//# sourceMappingURL=bank-branch.repository.js.map