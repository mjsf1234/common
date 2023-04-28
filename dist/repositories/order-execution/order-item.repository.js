"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let OrderItemRepository = class OrderItemRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, orderRepositoryGetter, instrumentRepositoryGetter, secondaryInstrumentRepositoryGetter, serviceProviderAccountRepositoryGetter, currencyRepositoryGetter, transactionTypeRepositoryGetter, systematicMethodRepositoryGetter, goalRepositoryGetter, secondaryGoalRepositoryGetter, transactionRepositoryGetter, paymentDetailsRepositoryGetter, rtaRepositoryGetter, transactionFeedLogRepositoryGetter, paymentConfirmationFeedLogRepositoryGetter, transactionTwoFaRepositoryGetter) {
        super(models_1.OrderItem, dataSource);
        this.order = this.createBelongsToAccessorFor('order', orderRepositoryGetter);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.secondaryInstrument = this.createBelongsToAccessorFor('secondaryInstrument', secondaryInstrumentRepositoryGetter);
        this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
        this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);
        this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);
        this.systematicMethod = this.createBelongsToAccessorFor('systematicMethod', systematicMethodRepositoryGetter);
        this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);
        this.secondaryGoal = this.createBelongsToAccessorFor('secondaryGoal', secondaryGoalRepositoryGetter);
        this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
        this.txnFeedLog = this.createBelongsToAccessorFor('txnFeedLog', transactionFeedLogRepositoryGetter);
        this.paymentConfirmationFeedLog = this.createBelongsToAccessorFor('paymentConfirmationFeedLog', paymentConfirmationFeedLogRepositoryGetter);
        this.transactionTwoFaSms = this.createBelongsToAccessorFor('transactionTwoFaSms', transactionTwoFaRepositoryGetter);
        this.transactionTwoFaEmail = this.createBelongsToAccessorFor('transactionTwoFaEmail', transactionTwoFaRepositoryGetter);
        this.transaction = this.createHasManyRepositoryFactoryFor('transaction', transactionRepositoryGetter);
        this.paymentDetails = this.createHasOneRepositoryFactoryFor('paymentDetails', paymentDetailsRepositoryGetter);
        this.registerInclusionResolver('order', this.order.inclusionResolver);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('secondaryInstrument', this.secondaryInstrument.inclusionResolver);
        this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
        this.registerInclusionResolver('currency', this.currency.inclusionResolver);
        this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
        this.registerInclusionResolver('systematicMethod', this.systematicMethod.inclusionResolver);
        this.registerInclusionResolver('goal', this.goal.inclusionResolver);
        this.registerInclusionResolver('secondaryGoal', this.secondaryGoal.inclusionResolver);
        this.registerInclusionResolver('transaction', this.transaction.inclusionResolver);
        this.registerInclusionResolver('paymentDetails', this.paymentDetails.inclusionResolver);
        this.registerInclusionResolver('rta', this.rta.inclusionResolver);
        this.registerInclusionResolver('txnFeedLog', this.txnFeedLog.inclusionResolver);
        this.registerInclusionResolver('paymentConfirmationFeedLog', this.paymentConfirmationFeedLog.inclusionResolver);
        this.registerInclusionResolver('transactionTwoFaSms', this.transactionTwoFaSms.inclusionResolver);
        this.registerInclusionResolver('transactionTwoFaEmail', this.transactionTwoFaEmail.inclusionResolver);
    }
};
OrderItemRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('OrderRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('CurrencyRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('TransactionTypeRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('SystematicMethodRepository')),
    (0, tslib_1.__param)(8, repository_1.repository.getter('GoalRepository')),
    (0, tslib_1.__param)(9, repository_1.repository.getter('GoalRepository')),
    (0, tslib_1.__param)(10, repository_1.repository.getter('TransactionRepository')),
    (0, tslib_1.__param)(11, repository_1.repository.getter('PaymentDetailsRepository')),
    (0, tslib_1.__param)(12, repository_1.repository.getter('RtaRepository')),
    (0, tslib_1.__param)(13, repository_1.repository.getter('TransactionFeedLogRepository')),
    (0, tslib_1.__param)(14, repository_1.repository.getter('PaymentConfirmationFeedLogRepository')),
    (0, tslib_1.__param)(15, repository_1.repository.getter('TransactionTwoFaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function])
], OrderItemRepository);
exports.OrderItemRepository = OrderItemRepository;
//# sourceMappingURL=order-item.repository.js.map