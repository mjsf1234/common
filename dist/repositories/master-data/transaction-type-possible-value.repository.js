"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTypePossibleValueRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let TransactionTypePossibleValueRepository = class TransactionTypePossibleValueRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, transactionTypeRepositoryGetter) {
        super(models_1.TransactionTypePossibleValue, dataSource);
        this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);
        this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
    }
};
TransactionTypePossibleValueRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('TransactionTypeRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], TransactionTypePossibleValueRepository);
exports.TransactionTypePossibleValueRepository = TransactionTypePossibleValueRepository;
//# sourceMappingURL=transaction-type-possible-value.repository.js.map