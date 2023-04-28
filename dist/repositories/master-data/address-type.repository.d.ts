import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { AddressType, AddressTypeRelations } from '../../models';
export declare class AddressTypeRepository extends BaseLocalRepository<AddressType, typeof AddressType.prototype.id, AddressTypeRelations> {
    constructor(dataSource: juggler.DataSource);
}
