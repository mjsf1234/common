import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { CapitalGainIndexation, CapitalGainIndexationRelations } from '../../models';
export declare class CapitalGainIndexationRepository extends BaseLocalRepository<CapitalGainIndexation, typeof CapitalGainIndexation.prototype.id, CapitalGainIndexationRelations> {
    constructor(dataSource: juggler.DataSource);
}
