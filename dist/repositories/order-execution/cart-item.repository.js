"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let CartItemRepository = class CartItemRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, cartRepositoryGetter, instrumentRepositoryGetter, secondaryInstrumentRepositoryGetter, serviceProviderAccountRepositoryGetter, transactionTypeRepositoryGetter, goalRepositoryGetter, systematicMethodRepositoryGetter, transactionTwoFaRepositoryGetter) {
        super(models_1.CartItem, dataSource);
        this.cart = this.createBelongsToAccessorFor('cart', cartRepositoryGetter);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.secondaryInstrument = this.createBelongsToAccessorFor('secondaryInstrument', secondaryInstrumentRepositoryGetter);
        this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
        this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);
        this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);
        this.systematicMethod = this.createBelongsToAccessorFor('systematicMethod', systematicMethodRepositoryGetter);
        this.transactionTwoFaSms = this.createBelongsToAccessorFor('transactionTwoFaSms', transactionTwoFaRepositoryGetter);
        this.transactionTwoFaEmail = this.createBelongsToAccessorFor('transactionTwoFaEmail', transactionTwoFaRepositoryGetter);
        this.registerInclusionResolver('cart', this.cart.inclusionResolver);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('secondaryInstrument', this.secondaryInstrument.inclusionResolver);
        this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
        this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
        this.registerInclusionResolver('goal', this.goal.inclusionResolver);
        this.registerInclusionResolver('systematicMethod', this.systematicMethod.inclusionResolver);
        this.registerInclusionResolver('transactionTwoFaSms', this.transactionTwoFaSms.inclusionResolver);
        this.registerInclusionResolver('transactionTwoFaEmail', this.transactionTwoFaEmail.inclusionResolver);
    }
};
CartItemRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('CartRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('TransactionTypeRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('GoalRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('SystematicMethodRepository')),
    (0, tslib_1.__param)(8, repository_1.repository.getter('TransactionTwoFaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function, Function])
], CartItemRepository);
exports.CartItemRepository = CartItemRepository;
//# sourceMappingURL=cart-item.repository.js.map