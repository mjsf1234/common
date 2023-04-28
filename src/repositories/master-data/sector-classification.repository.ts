import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {SectorClassification, SectorClassificationRelations} from '../../models';

export class SectorClassificationRepository extends BaseLocalRepository<
  SectorClassification,
  typeof SectorClassification.prototype.id,
  SectorClassificationRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(SectorClassification, dataSource);
  }
}
