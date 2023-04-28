"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUserRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let AppUserRepository = class AppUserRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, familyRepositoryGetter, familyMappingRepositoryGetter, appFileProfilePictureRepositoryGetter, investorDetailsRepositoryGetter, appRoleRepositoryGetter, appUserRoleMappingRepositoryGetter, appAccessTokenRepositoryGetter, accountRepository, alertRepositoryGetter, feedbackRepositoryGetter, CasRequestRepositoryGetter, mpinHistoriesRepositoryGetter, idcomDetailsRepositoryGetter, userNotificationTokenRepositoryGetter, operationRepositoryGetter) {
        super(models_1.AppUser, dataSource);
        this.family = this.createBelongsToAccessorFor('family', familyRepositoryGetter);
        this.parentIds = this.createHasManyRepositoryFactoryFor('parentIds', familyMappingRepositoryGetter);
        this.childIds = this.createHasManyRepositoryFactoryFor('childIds', familyMappingRepositoryGetter);
        this.appFileProfilePicture = this.createBelongsToAccessorFor('appFileProfilePicture', appFileProfilePictureRepositoryGetter);
        this.investorDetails = this.createHasOneRepositoryFactoryFor('investorDetails', investorDetailsRepositoryGetter);
        this.operationDetails = this.createHasOneRepositoryFactoryFor('operationDetails', operationRepositoryGetter);
        this.appRoles = this.createHasManyThroughRepositoryFactoryFor('appRoles', appRoleRepositoryGetter, appUserRoleMappingRepositoryGetter);
        this.accessTokens = this.createHasManyRepositoryFactoryFor('accessTokens', appAccessTokenRepositoryGetter);
        this.primaryAccounts = this.createHasManyRepositoryFactoryFor('primaryAccounts', accountRepository);
        this.alerts = this.createHasManyRepositoryFactoryFor('alerts', alertRepositoryGetter);
        this.feedbacks = this.createHasManyRepositoryFactoryFor('feedbacks', feedbackRepositoryGetter);
        this.casRequests = this.createHasManyRepositoryFactoryFor('casRequests', CasRequestRepositoryGetter);
        this.mpinHistories = this.createHasManyRepositoryFactoryFor('mpinHistories', mpinHistoriesRepositoryGetter);
        this.idcomDetails = this.createHasManyRepositoryFactoryFor('idcomDetails', idcomDetailsRepositoryGetter);
        this.userNotificationTokens = this.createHasManyRepositoryFactoryFor('userNotificationTokens', userNotificationTokenRepositoryGetter);
        this.registerInclusionResolver('family', this.family.inclusionResolver);
        this.registerInclusionResolver('parentIds', this.parentIds.inclusionResolver);
        this.registerInclusionResolver('childIds', this.childIds.inclusionResolver);
        this.registerInclusionResolver('appFileProfilePicture', this.appFileProfilePicture.inclusionResolver);
        this.registerInclusionResolver('investorDetails', this.investorDetails.inclusionResolver);
        this.registerInclusionResolver('appRoles', this.appRoles.inclusionResolver);
        this.registerInclusionResolver('accessTokens', this.accessTokens.inclusionResolver);
        this.registerInclusionResolver('primaryAccounts', this.primaryAccounts.inclusionResolver);
        this.registerInclusionResolver('alerts', this.alerts.inclusionResolver);
        this.registerInclusionResolver('feedbacks', this.feedbacks.inclusionResolver);
        this.registerInclusionResolver('casRequests', this.casRequests.inclusionResolver);
        this.registerInclusionResolver('mpinHistories', this.mpinHistories.inclusionResolver);
        this.registerInclusionResolver('idcomDetails', this.idcomDetails.inclusionResolver);
        this.registerInclusionResolver('userNotificationTokens', this.userNotificationTokens.inclusionResolver);
        this.registerInclusionResolver('operationDetails', this.operationDetails.inclusionResolver);
    }
};
AppUserRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('FamilyRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('FamilyMappingRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('InvestorDetailsRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('AppRoleRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('AppUserRoleMappingRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('AppAccessTokenRepository')),
    (0, tslib_1.__param)(8, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(9, repository_1.repository.getter('AlertRepository')),
    (0, tslib_1.__param)(10, repository_1.repository.getter('FeedbackRepository')),
    (0, tslib_1.__param)(11, repository_1.repository.getter('CasRequestRepository')),
    (0, tslib_1.__param)(12, repository_1.repository.getter('MpinHistoryRepository')),
    (0, tslib_1.__param)(13, repository_1.repository.getter('IdcomDetailsRepository')),
    (0, tslib_1.__param)(14, repository_1.repository.getter('UserNotificationTokenRepository')),
    (0, tslib_1.__param)(15, repository_1.repository.getter('OperationRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function])
], AppUserRepository);
exports.AppUserRepository = AppUserRepository;
//# sourceMappingURL=app-user.repository.js.map