import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { IdentificationType, IdentificationTypeRelations } from '../../models';
export declare class IdentificationTypeRepository extends BaseLocalRepository<IdentificationType, typeof IdentificationType.prototype.id, IdentificationTypeRelations> {
    constructor(dataSource: juggler.DataSource);
}
