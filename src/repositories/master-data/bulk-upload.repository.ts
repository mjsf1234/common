import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {MasterDataAppFile, AppUser, BulkUpload, BulkUploadRelations} from '../../models';
import {AppUserRepository} from '../user-management';
import {MasterDataAppFileRepository} from './master-data-app-file.repository';

export class BulkUploadRepository extends BaseLocalRepository<BulkUpload, typeof BulkUpload.prototype.id, BulkUploadRelations> {
  public readonly masterDataAppFile: BelongsToAccessor<MasterDataAppFile, typeof BulkUpload.prototype.id>;
  public readonly appUser: BelongsToAccessor<AppUser, typeof BulkUpload.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('MasterDataAppFileRepository') masterDataAppFileRepositoryGetter: Getter<MasterDataAppFileRepository>,
    @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>
  ) {
    super(BulkUpload, dataSource);
    this.masterDataAppFile = this.createBelongsToAccessorFor('masterDataAppFile', masterDataAppFileRepositoryGetter);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('masterDataAppFile', this.masterDataAppFile.inclusionResolver);
    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
