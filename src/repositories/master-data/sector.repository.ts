import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {Sector, SectorRelations} from '../../models';

export class SectorRepository extends BaseLocalRepository<Sector, typeof Sector.prototype.id, SectorRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(Sector, dataSource);
  }
}
