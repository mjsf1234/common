import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Account, UserManagementAppFile, ServiceRequestDocument, ServiceRequestDocumentRelations} from '../../models';
import {AccountRepository} from './account.repository';
import {UserManagementAppFileRepository} from './user-management-app-file.repository';

export class ServiceRequestDocumentRepository extends BaseLocalRepository<
  ServiceRequestDocument,
  typeof ServiceRequestDocument.prototype.id,
  ServiceRequestDocumentRelations
> {
  public readonly account: BelongsToAccessor<Account, typeof ServiceRequestDocument.prototype.id>;
  public readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof ServiceRequestDocument.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('UserManagementAppFileRepository') userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>
  ) {
    super(ServiceRequestDocument, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.userManagementAppFile = this.createBelongsToAccessorFor('userManagementAppFile', userManagementAppFileRepositoryGetter);

    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('userManagementAppFile', this.userManagementAppFile.inclusionResolver);
  }
}
