"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionVerificationRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let TransactionVerificationRepository = class TransactionVerificationRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, cartRepositoryGetter, accountRepository) {
        super(models_1.TransactionVerification, dataSource);
        this.cart = this.createBelongsToAccessorFor('cart', cartRepositoryGetter);
        this.account = this.createBelongsToAccessorFor('account', accountRepository);
        this.registerInclusionResolver('cart', this.cart.inclusionResolver);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
    }
};
TransactionVerificationRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('CartRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], TransactionVerificationRepository);
exports.TransactionVerificationRepository = TransactionVerificationRepository;
//# sourceMappingURL=transaction-verification.repository.js.map