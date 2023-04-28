import { BaseLocalRepository } from '../../repositories';
import { Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Country, CountryRelations, OverseesAddress, State } from '../../models';
import { StateRepository } from '../..';
import { OverseesAddressRepository } from '../user-management';
export declare class CountryRepository extends BaseLocalRepository<Country, typeof Country.prototype.id, CountryRelations> {
    readonly states: HasManyRepositoryFactory<State, typeof Country.prototype.id>;
    readonly overseesAddresses: HasManyRepositoryFactory<OverseesAddress, typeof Country.prototype.id>;
    constructor(dataSource: juggler.DataSource, stateRepositoryGetter: Getter<StateRepository>, overseesAddressRepositoryGetter: Getter<OverseesAddressRepository>);
}
