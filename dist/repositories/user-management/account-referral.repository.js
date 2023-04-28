"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountReferralRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let AccountReferralRepository = class AccountReferralRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter) {
        super(models_1.AccountReferral, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
    }
};
AccountReferralRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], AccountReferralRepository);
exports.AccountReferralRepository = AccountReferralRepository;
//# sourceMappingURL=account-referral.repository.js.map