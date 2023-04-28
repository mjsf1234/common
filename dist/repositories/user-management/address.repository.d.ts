import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Address, AddressRelations, AddressType, State } from '../../models';
import { AddressTypeRepository, StateRepository } from '../master-data';
export declare class AddressRepository extends BaseLocalRepository<Address, typeof Address.prototype.id, AddressRelations> {
    readonly addressType: BelongsToAccessor<AddressType, typeof Address.prototype.id>;
    readonly state: BelongsToAccessor<State, typeof Address.prototype.id>;
    constructor(dataSource: juggler.DataSource, addressTypeRepositoryGetter: Getter<AddressTypeRepository>, stateRepositoryGetter: Getter<StateRepository>);
}
