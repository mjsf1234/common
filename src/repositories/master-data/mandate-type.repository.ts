import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {MandateType, MandateTypeRelations} from '../../models';

export class MandateTypeRepository extends BaseLocalRepository<MandateType, typeof MandateType.prototype.id, MandateTypeRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(MandateType, dataSource);
  }
}
