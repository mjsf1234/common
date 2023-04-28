import {AccountRepository, BaseLocalRepository, RtaRepository, ServiceProviderRepository, UserManagementAppFileRepository} from '..';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Account, NomineeDocument, NomineeDocumentRelations, Rta, ServiceProvider, UserManagementAppFile} from '../../models';

export class NomineeDocumentRepository extends BaseLocalRepository<
  NomineeDocument,
  typeof NomineeDocument.prototype.id,
  NomineeDocumentRelations
> {
  public readonly account: BelongsToAccessor<Account, typeof NomineeDocument.prototype.id>;
  public readonly appFile: BelongsToAccessor<UserManagementAppFile, typeof NomineeDocument.prototype.id>;
  public readonly rta: BelongsToAccessor<Rta, typeof NomineeDocument.prototype.id>;
  public readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof NomineeDocument.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('UserManagementAppFileRepository') userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('RtaRepository') rtaRepositoryGetter: Getter<RtaRepository>   ,
    @repository.getter('ServiceProviderRepository') serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>,

  ) {
    super(NomineeDocument, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.appFile = this.createBelongsToAccessorFor('appFile', userManagementAppFileRepositoryGetter);
    this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
    this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);



    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('appFile', this.appFile.inclusionResolver);
    this.registerInclusionResolver('rta', this.rta.inclusionResolver);
    this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);

  }
}
