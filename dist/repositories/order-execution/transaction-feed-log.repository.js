"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFeedLogRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let TransactionFeedLogRepository = class TransactionFeedLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, rtaRepositoryGetter, orderExecutionAppFileRepositoryGetter, orderItemRepositoryGetter) {
        super(models_1.TransactionFeedLog, dataSource);
        this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
        this.txnFeedFile = this.createBelongsToAccessorFor('txnFeedFile', orderExecutionAppFileRepositoryGetter);
        this.orderItems = this.createHasManyRepositoryFactoryFor('orderItems', orderItemRepositoryGetter);
        this.registerInclusionResolver('rta', this.rta.inclusionResolver);
        this.registerInclusionResolver('txnFeedFile', this.txnFeedFile.inclusionResolver);
        this.registerInclusionResolver('orderItems', this.orderItems.inclusionResolver);
    }
};
TransactionFeedLogRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('RtaRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('OrderExecutionAppFileRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('OrderItemRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], TransactionFeedLogRepository);
exports.TransactionFeedLogRepository = TransactionFeedLogRepository;
//# sourceMappingURL=transaction-feed-log.repository.js.map