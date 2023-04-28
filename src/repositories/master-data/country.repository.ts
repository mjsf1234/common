import {BaseLocalRepository} from '../../repositories';
import {Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Country, CountryRelations, OverseesAddress, State} from '../../models';
import {StateRepository} from '../..';
import {OverseesAddressRepository} from '../user-management';

export class CountryRepository extends BaseLocalRepository<Country, typeof Country.prototype.id, CountryRelations> {
  public readonly states: HasManyRepositoryFactory<State, typeof Country.prototype.id>;
  public readonly overseesAddresses: HasManyRepositoryFactory<OverseesAddress, typeof Country.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('StateRepository') stateRepositoryGetter: Getter<StateRepository>,
    @repository.getter('OverseesAddressRepository') overseesAddressRepositoryGetter: Getter<OverseesAddressRepository>
  ) {
    super(Country, dataSource);

    this.states = this.createHasManyRepositoryFactoryFor('states', stateRepositoryGetter);
    this.overseesAddresses = this.createHasManyRepositoryFactoryFor('overseesAddresses', overseesAddressRepositoryGetter);

    this.registerInclusionResolver('states', this.states.inclusionResolver);
    this.registerInclusionResolver('overseesAddresses', this.overseesAddresses.inclusionResolver);
  }
}
