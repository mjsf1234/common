import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {AssetClassification, AssetClassificationRelations} from '../../models';

export class AssetClassificationRepository extends BaseLocalRepository<
  AssetClassification,
  typeof AssetClassification.prototype.id,
  AssetClassificationRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(AssetClassification, dataSource);
  }
}
