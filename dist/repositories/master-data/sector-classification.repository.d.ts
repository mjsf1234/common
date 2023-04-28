import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { SectorClassification, SectorClassificationRelations } from '../../models';
export declare class SectorClassificationRepository extends BaseLocalRepository<SectorClassification, typeof SectorClassification.prototype.id, SectorClassificationRelations> {
    constructor(dataSource: juggler.DataSource);
}
