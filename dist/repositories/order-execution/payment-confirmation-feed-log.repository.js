"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentConfirmationFeedLogRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let PaymentConfirmationFeedLogRepository = class PaymentConfirmationFeedLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, serviceProviderRepositoryGetter, orderExecutionAppFileRepositoryGetter) {
        super(models_1.PaymentConfirmationFeedLog, dataSource);
        this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);
        this.orderExecutionAppFile = this.createBelongsToAccessorFor('orderExecutionAppFile', orderExecutionAppFileRepositoryGetter);
        this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
        this.registerInclusionResolver('orderExecutionAppFile', this.orderExecutionAppFile.inclusionResolver);
    }
};
PaymentConfirmationFeedLogRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ServiceProviderRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('OrderExecutionAppFileRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], PaymentConfirmationFeedLogRepository);
exports.PaymentConfirmationFeedLogRepository = PaymentConfirmationFeedLogRepository;
//# sourceMappingURL=payment-confirmation-feed-log.repository.js.map