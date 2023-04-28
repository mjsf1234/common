"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let OrderRepository = class OrderRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, orderItemRepositoryGetter) {
        super(models_1.Order, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.orderItems = this.createHasManyRepositoryFactoryFor('orderItems', orderItemRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('orderItems', this.orderItems.inclusionResolver);
    }
};
OrderRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('OrderItemRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], OrderRepository);
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map