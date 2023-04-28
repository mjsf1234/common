"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDetailsRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let PaymentDetailsRepository = class PaymentDetailsRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, orderItemRepositoryGetter, bankAccountRepository) {
        super(models_1.PaymentDetails, dataSource);
        this.orderItem = this.createBelongsToAccessorFor('orderItem', orderItemRepositoryGetter);
        this.bankAccount = this.createBelongsToAccessorFor('bankAccount', bankAccountRepository);
        this.registerInclusionResolver('orderItem', this.orderItem.inclusionResolver);
        this.registerInclusionResolver('bankAccount', this.bankAccount.inclusionResolver);
    }
};
PaymentDetailsRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('OrderItemRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('BankAccountRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], PaymentDetailsRepository);
exports.PaymentDetailsRepository = PaymentDetailsRepository;
//# sourceMappingURL=payment-details.repository.js.map