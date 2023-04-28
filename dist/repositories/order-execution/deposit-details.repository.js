"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositDetailsRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
const base_local_repository_1 = require("../base-local.repository");
let DepositDetailsRepository = class DepositDetailsRepository extends base_local_repository_1.BaseLocalRepository {
    constructor(dataSource, instrumentRepositoryGetter, serviceProviderAccountRepositoryGetter, accountRepositoryGetter, currencyRepositoryGetter) {
        super(models_1.DepositDetails, dataSource);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
        this.registerInclusionResolver('currency', this.currency.inclusionResolver);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
    }
};
DepositDetailsRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('CurrencyRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function])
], DepositDetailsRepository);
exports.DepositDetailsRepository = DepositDetailsRepository;
//# sourceMappingURL=deposit-details.repository.js.map