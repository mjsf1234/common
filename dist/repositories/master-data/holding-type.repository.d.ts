import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { HoldingType, HoldingTypeRelations } from '../../models';
export declare class HoldingTypeRepository extends BaseLocalRepository<HoldingType, typeof HoldingType.prototype.id, HoldingTypeRelations> {
    constructor(dataSource: juggler.DataSource);
}
