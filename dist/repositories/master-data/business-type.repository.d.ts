import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { BusinessType, BusinessTypeRelations } from '../../models';
export declare class BusinessTypeRepository extends BaseLocalRepository<BusinessType, typeof BusinessType.prototype.id, BusinessTypeRelations> {
    constructor(dataSource: juggler.DataSource);
}
