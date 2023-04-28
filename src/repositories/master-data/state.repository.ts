import {AddressRepository, BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Address, Country, State, StateRelations} from '../../models';
import {CountryRepository} from './country.repository';

export class StateRepository extends BaseLocalRepository<State, typeof State.prototype.id, StateRelations> {
  public readonly country: BelongsToAccessor<Country, typeof State.prototype.id>;
  public readonly addresses: HasManyRepositoryFactory<Address, typeof State.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('CountryRepository') countryRepositoryGetter: Getter<CountryRepository>,
    @repository.getter('AddressRepository') addressRepositoryGetter: Getter<AddressRepository>
  ) {
    super(State, dataSource);
    this.country = this.createBelongsToAccessorFor('country', countryRepositoryGetter);
    this.addresses = this.createHasManyRepositoryFactoryFor('addresses', addressRepositoryGetter);

    this.registerInclusionResolver('country', this.country.inclusionResolver);
    this.registerInclusionResolver('addresses', this.addresses.inclusionResolver);
  }
}
