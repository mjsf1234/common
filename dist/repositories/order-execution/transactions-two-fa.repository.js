"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTwoFaRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let TransactionTwoFaRepository = class TransactionTwoFaRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, cartItemRepositoryGetter, orderItemRepositoryGetter, accountRepository) {
        super(models_1.TransactionTwoFa, dataSource);
        this.orderItemSmsGroups = this.createHasManyRepositoryFactoryFor('orderItemSmsGroups', orderItemRepositoryGetter);
        this.cartItemSmsGroups = this.createHasManyRepositoryFactoryFor('cartItemSmsGroups', cartItemRepositoryGetter);
        this.orderItemEmailGroups = this.createHasManyRepositoryFactoryFor('orderItemEmailGroups', orderItemRepositoryGetter);
        this.cartItemEmailGroups = this.createHasManyRepositoryFactoryFor('cartItemEmailGroups', cartItemRepositoryGetter);
        this.account = this.createBelongsToAccessorFor('account', accountRepository);
        this.registerInclusionResolver('cartItemSmsGroups', this.cartItemSmsGroups.inclusionResolver);
        this.registerInclusionResolver('orderItemSmsGroups', this.orderItemSmsGroups.inclusionResolver);
        this.registerInclusionResolver('cartItemEmailGroups', this.cartItemEmailGroups.inclusionResolver);
        this.registerInclusionResolver('orderItemEmailGroups', this.orderItemEmailGroups.inclusionResolver);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
    }
};
TransactionTwoFaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('CartItemRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('OrderItemRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], TransactionTwoFaRepository);
exports.TransactionTwoFaRepository = TransactionTwoFaRepository;
//# sourceMappingURL=transactions-two-fa.repository.js.map