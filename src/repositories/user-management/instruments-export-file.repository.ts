import {BaseLocalRepository, UserManagementAppFileRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {InstrumentsExportFile, InstrumentsExportFileRelations, UserManagementAppFile} from '../../models';

export class InstrumentsExportFileRepository extends BaseLocalRepository<InstrumentsExportFile, typeof InstrumentsExportFile.prototype.id, InstrumentsExportFileRelations> {
  public readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof InstrumentsExportFile.prototype.id>;

  constructor(dataSource: juggler.DataSource,
    @repository.getter('UserManagementAppFileRepository') userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    ) {
    super(InstrumentsExportFile, dataSource);
    this.userManagementAppFile = this.createBelongsToAccessorFor('userManagementAppFile', userManagementAppFileRepositoryGetter);
    this.registerInclusionResolver('userManagementAppFile', this.userManagementAppFile.inclusionResolver);

  }
}
