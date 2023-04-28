"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let CartRepository = class CartRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, createdByAppUserRepositoryGetter, accountRepositoryGetter, cartItemRepositoryGetter) {
        super(models_1.Cart, dataSource);
        this.createdByAppUser = this.createBelongsToAccessorFor('createdByAppUser', createdByAppUserRepositoryGetter);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.cartItems = this.createHasManyRepositoryFactoryFor('cartItems', cartItemRepositoryGetter);
        this.registerInclusionResolver('createdByAppUser', this.createdByAppUser.inclusionResolver);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('cartItems', this.cartItems.inclusionResolver);
    }
};
CartRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('CartItemRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], CartRepository);
exports.CartRepository = CartRepository;
//# sourceMappingURL=cart.repository.js.map