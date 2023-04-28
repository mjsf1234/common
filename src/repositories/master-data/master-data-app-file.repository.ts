import {BaseLocalRepository} from '..';
import {juggler} from '@loopback/repository';
import {MasterDataAppFile, MasterDataAppFileRelations} from '../../models';

export class MasterDataAppFileRepository extends BaseLocalRepository<
  MasterDataAppFile,
  typeof MasterDataAppFile.prototype.id,
  MasterDataAppFileRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(MasterDataAppFile, dataSource);
  }
}
