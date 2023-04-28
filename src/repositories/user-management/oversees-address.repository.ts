import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AddressType, Country, OverseesAddress, OverseesAddressRelations} from '../../models';
import {AddressTypeRepository, CountryRepository} from '../master-data';

export class OverseesAddressRepository extends BaseLocalRepository<
  OverseesAddress,
  typeof OverseesAddress.prototype.id,
  OverseesAddressRelations
> {
  public readonly country: BelongsToAccessor<Country, typeof OverseesAddress.prototype.id>;
  public readonly addressType: BelongsToAccessor<AddressType, typeof OverseesAddress.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('CountryRepository') countryRepositoryGetter: Getter<CountryRepository>,
    @repository.getter('AddressTypeRepository') addressTypeRepositoryGetter: Getter<AddressTypeRepository>
  ) {
    super(OverseesAddress, dataSource);
    this.country = this.createBelongsToAccessorFor('country', countryRepositoryGetter);
    this.addressType = this.createBelongsToAccessorFor('addressType', addressTypeRepositoryGetter);

    this.registerInclusionResolver('country', this.country.inclusionResolver);
    this.registerInclusionResolver('addressType', this.addressType.inclusionResolver);
  }
}
