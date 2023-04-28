import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { Sector, SectorRelations } from '../../models';
export declare class SectorRepository extends BaseLocalRepository<Sector, typeof Sector.prototype.id, SectorRelations> {
    constructor(dataSource: juggler.DataSource);
}
