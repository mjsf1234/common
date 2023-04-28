import {BaseLocalRepository} from '..';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {AppUser, AuditTrail, Rta, AuditTrailFile, UserManagementAppFile } from '../../models';
import {RtaRepository} from '../master-data';
import {AppUserRepository, UserManagementAppFileRepository, AuditTrailRepository} from '.';
import { AuditTrailFileRelations } from '../../models/user-management/audit-trail-file';


export class AuditTrailFileRepository extends BaseLocalRepository<AuditTrailFile, typeof AuditTrailFile.prototype.id, AuditTrailFileRelations> {
  public readonly rta: BelongsToAccessor<Rta, typeof AuditTrailFile.prototype.id>;
  public readonly uploadedByAppUser: BelongsToAccessor<AppUser, typeof AuditTrailFile.prototype.id>;
  public readonly uploadedFile: BelongsToAccessor<UserManagementAppFile, typeof AuditTrailFile.prototype.id>;
  public readonly deletedByAppUser: BelongsToAccessor<AppUser, typeof AuditTrailFile.prototype.id>;
  public readonly auditTrail: HasManyRepositoryFactory<AuditTrail, typeof AuditTrailFile.prototype.id>;
  public readonly exportedFile: BelongsToAccessor<UserManagementAppFile, typeof AuditTrailFile.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('RtaRepository') rtaRepositoryGetter: Getter<RtaRepository>,
    @repository.getter('AppUserRepository') uploadedByAppUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('UserManagementAppFileRepository') uploadedFileGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('AppUserRepository') deletedByAppUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('AuditTrailRepository') auditTrailRepositoryGetter: Getter<AuditTrailRepository>,
    @repository.getter('UserManagementAppFileRepository') exportedFileGetter: Getter<UserManagementAppFileRepository>,
  ) {
    super(AuditTrailFile, dataSource);
    this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
    this.uploadedByAppUser = this.createBelongsToAccessorFor('uploadedByAppUser', uploadedByAppUserRepositoryGetter);
    this.uploadedFile = this.createBelongsToAccessorFor('uploadedFile', uploadedFileGetter);
    this.deletedByAppUser = this.createBelongsToAccessorFor('deletedByAppUser', deletedByAppUserRepositoryGetter);
    this.auditTrail = this.createHasManyRepositoryFactoryFor('auditTrail', auditTrailRepositoryGetter);
    this.exportedFile = this.createBelongsToAccessorFor('exportedFile', exportedFileGetter);

    this.registerInclusionResolver('rta', this.rta.inclusionResolver);
    this.registerInclusionResolver('uploadedByAppUser', this.uploadedByAppUser.inclusionResolver);
    this.registerInclusionResolver('uploadedFile', this.uploadedFile.inclusionResolver);
    this.registerInclusionResolver('deletedByAppUser', this.deletedByAppUser.inclusionResolver);
    this.registerInclusionResolver('auditTrail', this.auditTrail.inclusionResolver);
    this.registerInclusionResolver('exportedFile', this.exportedFile.inclusionResolver);
  }
}
