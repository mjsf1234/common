import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {Asset, AssetRelations} from '../../models';

export class AssetRepository extends BaseLocalRepository<Asset, typeof Asset.prototype.id, AssetRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(Asset, dataSource);
  }
}
