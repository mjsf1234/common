import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {BulkUpload, EtlLog, EtlLogRelations} from '../../models';
import {BulkUploadRepository} from '../master-data';

export class EtlLogRepository extends BaseLocalRepository<EtlLog, typeof EtlLog.prototype.id, EtlLogRelations> {
  public readonly bulkUpload: BelongsToAccessor<BulkUpload, typeof EtlLog.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('BulkUploadRepository') bulkUploadRepositoryGetter: Getter<BulkUploadRepository>
  ) {
    super(EtlLog, dataSource);
    this.bulkUpload = this.createBelongsToAccessorFor('bulkUpload', bulkUploadRepositoryGetter);

    this.registerInclusionResolver('bulkUpload', this.bulkUpload.inclusionResolver);
  }
}
