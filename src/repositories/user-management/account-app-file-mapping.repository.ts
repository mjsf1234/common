import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor,HasOneRepositoryFactory, Getter, juggler, repository} from '@loopback/repository';
import {Account, AccountAppFileMapping, AccountAppFileMappingRelations, UserManagementAppFile, AppUser, AuditTrail} from '../../models';
import {AccountRepository} from './account.repository';
import {UserManagementAppFileRepository} from './user-management-app-file.repository';
import {AuditTrailRepository} from './audit-trail';

export class AccountAppFileMappingRepository extends BaseLocalRepository<
  AccountAppFileMapping,
  typeof AccountAppFileMapping.prototype.id,
  AccountAppFileMappingRelations
> {
  public readonly account: BelongsToAccessor<Account, typeof AccountAppFileMapping.prototype.id>;
  public readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof AccountAppFileMapping.prototype.id>;
  public readonly auditTrail: HasOneRepositoryFactory<AuditTrail, typeof AccountAppFileMapping.prototype.id>;
  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('UserManagementAppFileRepository') userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('AuditTrailRepository') AuditTrailRepositoryGetter: Getter<AuditTrailRepository>
  ) {
    super(AccountAppFileMapping, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.userManagementAppFile = this.createBelongsToAccessorFor('userManagementAppFile', userManagementAppFileRepositoryGetter);
    this.auditTrail = this.createHasOneRepositoryFactoryFor('auditTrail', AuditTrailRepositoryGetter);
    
    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('userManagementAppFile', this.userManagementAppFile.inclusionResolver);
    this.registerInclusionResolver('auditTrail', this.auditTrail.inclusionResolver);
  }
}
