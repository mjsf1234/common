import {BaseLocalRepository, AccountAppFileMappingRepository,AuditTrailFileRepository, ServiceProviderAccountRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {AuditTrail, AuditLogRelations, AccountAppFileMapping, ServiceProviderAccount, AuditTrailFile} from '../../models';

export class AuditTrailRepository extends BaseLocalRepository<AuditTrail, typeof AuditTrail.prototype.id, AuditLogRelations> {
  public readonly accountAppFileMapping: BelongsToAccessor<AccountAppFileMapping, typeof AuditTrail.prototype.id>;
  public readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof AuditTrail.prototype.id>;
  public readonly auditTrailFile: BelongsToAccessor<AuditTrailFile, typeof AuditTrail.prototype.id>;

  constructor(dataSource: juggler.DataSource,
    @repository.getter('AccountAppFileMappingRepository') accountAppFileMappingRepositoryGetter: Getter<AccountAppFileMappingRepository>,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('AuditTrailFileRepository') auditTrailFileRepositoryGetter: Getter<AuditTrailFileRepository>
    ) {
    super(AuditTrail, dataSource);

    this.accountAppFileMapping = this.createBelongsToAccessorFor('accountAppFileMapping', accountAppFileMappingRepositoryGetter);
    this.registerInclusionResolver('accountAppFileMapping', this.accountAppFileMapping.inclusionResolver);

    this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
    this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);

    this.auditTrailFile = this.createBelongsToAccessorFor('auditTrailFile', auditTrailFileRepositoryGetter);
    this.registerInclusionResolver('auditTrailFile', this.auditTrailFile.inclusionResolver);


  }
}
