import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { Occupation, OccupationRelations } from '../../models';
export declare class OccupationRepository extends BaseLocalRepository<Occupation, typeof Occupation.prototype.id, OccupationRelations> {
    constructor(dataSource: juggler.DataSource);
}
