"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountServiceProviderAccountInstrumentMappingRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let AccountServiceProviderAccountInstrumentMappingRepository = class AccountServiceProviderAccountInstrumentMappingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, serviceProviderAccountRepositoryGetter, instrumentRepositoryGetter) {
        super(models_1.AccountServiceProviderAccountInstrumentMapping, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    }
};
AccountServiceProviderAccountInstrumentMappingRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], AccountServiceProviderAccountInstrumentMappingRepository);
exports.AccountServiceProviderAccountInstrumentMappingRepository = AccountServiceProviderAccountInstrumentMappingRepository;
//# sourceMappingURL=account-service-provider-account-instrument-mapping.repository.js.map