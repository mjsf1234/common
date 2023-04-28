import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { PoliticallyExposureType, PoliticallyExposureTypeRelations } from '../../models';
export declare class PoliticallyExposureTypeRepository extends BaseLocalRepository<PoliticallyExposureType, typeof PoliticallyExposureType.prototype.id, PoliticallyExposureTypeRelations> {
    constructor(dataSource: juggler.DataSource);
}
