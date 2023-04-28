import { AddressRepository, BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Address, Country, State, StateRelations } from '../../models';
import { CountryRepository } from './country.repository';
export declare class StateRepository extends BaseLocalRepository<State, typeof State.prototype.id, StateRelations> {
    readonly country: BelongsToAccessor<Country, typeof State.prototype.id>;
    readonly addresses: HasManyRepositoryFactory<Address, typeof State.prototype.id>;
    constructor(dataSource: juggler.DataSource, countryRepositoryGetter: Getter<CountryRepository>, addressRepositoryGetter: Getter<AddressRepository>);
}
