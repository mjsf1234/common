import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {WealthSource, WealthSourceRelations} from '../../models';

export class WealthSourceRepository extends BaseLocalRepository<WealthSource, typeof WealthSource.prototype.id, WealthSourceRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(WealthSource, dataSource);
  }
}
