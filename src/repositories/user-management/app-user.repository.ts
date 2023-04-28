import {BaseLocalRepository, InvestorDetailsRepository} from '../../repositories';
import {
  BelongsToAccessor,
  Getter,
  HasManyRepositoryFactory,
  HasManyThroughRepositoryFactory,
  HasOneRepositoryFactory,
  juggler,
  repository
} from '@loopback/repository';
import {
  Account,
  Alert,
  AppAccessToken,
  UserManagementAppFile,
  AppRole,
  AppUser,
  AppUserRelations,
  AppUserRoleMapping,
  Family,
  FamilyMapping,
  Feedback,
  InvestorDetails,
  CasRequest,
  MpinHistory,
  IdcomDetails,
  UserNotificationToken,
  Operation,
  CommunicationMatrix
} from '../../models';
import {FamilyRepository} from './family.repository';
import {FamilyMappingRepository} from './family-mapping.repository';
import {UserManagementAppFileRepository} from './user-management-app-file.repository';
import {AppRoleRepository} from './app-role.repository';
import {AppUserRoleMappingRepository} from './app-user-role-mapping.repository';
import {AppAccessTokenRepository} from './app-access-token.repository';
import {AccountRepository} from './account.repository';
import {AlertRepository} from './alert.repository';
import {FeedbackRepository} from './feedback.repository';
import {CasRequestRepository} from '../transaction';
import {MpinHistoryRepository} from './mpin-history.repository';
import {IdcomDetailsRepository} from './idcom-details.repository';
import {UserNotificationTokenRepository} from './user-notification-token.repository';
import {OperationRepository} from './operation.repository';
import {CommunicationMatrixRepository} from './communication-matrix.repository';

export class AppUserRepository extends BaseLocalRepository<AppUser, typeof AppUser.prototype.id, AppUserRelations> {
  public readonly family: BelongsToAccessor<Family, typeof AppUser.prototype.id>;

  public readonly appFileProfilePicture: BelongsToAccessor<UserManagementAppFile, typeof AppUser.prototype.id>;

  public readonly investorDetails: HasOneRepositoryFactory<InvestorDetails, typeof InvestorDetails.prototype.id>;
  public readonly operationDetails: HasOneRepositoryFactory<Operation, typeof Operation.prototype.id>;
  public readonly appRoles: HasManyThroughRepositoryFactory<
    AppRole,
    typeof AppRole.prototype.pid,
    AppUserRoleMapping,
    typeof AppUserRoleMapping.prototype.id
  >;

  public readonly accessTokens: HasManyRepositoryFactory<AppAccessToken, typeof AppUser.prototype.id>;
  public readonly primaryAccounts: HasManyRepositoryFactory<Account, typeof AppUser.prototype.id>;
  public readonly alerts: HasManyRepositoryFactory<Alert, typeof AppUser.prototype.id>;
  public readonly feedbacks: HasManyRepositoryFactory<Feedback, typeof AppUser.prototype.id>;
  public readonly casRequests: HasManyRepositoryFactory<CasRequest, typeof AppUser.prototype.id>;
  public readonly mpinHistories: HasManyRepositoryFactory<MpinHistory, typeof AppUser.prototype.id>;

  public readonly parentIds: HasManyRepositoryFactory<FamilyMapping, typeof AppUser.prototype.id>;
  public readonly childIds: HasManyRepositoryFactory<FamilyMapping, typeof AppUser.prototype.id>;

  public readonly idcomDetails: HasManyRepositoryFactory<IdcomDetails, typeof AppUser.prototype.id>;
  public readonly userNotificationTokens: HasManyRepositoryFactory<UserNotificationToken, typeof AppUser.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('FamilyRepository') familyRepositoryGetter: Getter<FamilyRepository>,
    @repository.getter('FamilyMappingRepository') familyMappingRepositoryGetter: Getter<FamilyMappingRepository>,
    @repository.getter('UserManagementAppFileRepository') appFileProfilePictureRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('InvestorDetailsRepository') investorDetailsRepositoryGetter: Getter<InvestorDetailsRepository>,
    @repository.getter('AppRoleRepository') appRoleRepositoryGetter: Getter<AppRoleRepository>,
    @repository.getter('AppUserRoleMappingRepository') appUserRoleMappingRepositoryGetter: Getter<AppUserRoleMappingRepository>,
    @repository.getter('AppAccessTokenRepository') appAccessTokenRepositoryGetter: Getter<AppAccessTokenRepository>,
    @repository.getter('AccountRepository') accountRepository: Getter<AccountRepository>,
    @repository.getter('AlertRepository') alertRepositoryGetter: Getter<AlertRepository>,
    @repository.getter('FeedbackRepository') feedbackRepositoryGetter: Getter<FeedbackRepository>,
    @repository.getter('CasRequestRepository') CasRequestRepositoryGetter: Getter<CasRequestRepository>,
    @repository.getter('MpinHistoryRepository') mpinHistoriesRepositoryGetter: Getter<MpinHistoryRepository>,
    @repository.getter('IdcomDetailsRepository') idcomDetailsRepositoryGetter: Getter<IdcomDetailsRepository>,
    @repository.getter('UserNotificationTokenRepository') userNotificationTokenRepositoryGetter: Getter<UserNotificationTokenRepository>,
    @repository.getter('OperationRepository') operationRepositoryGetter: Getter<OperationRepository>,
  ) {
    super(AppUser, dataSource);
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
}
