import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Country, Currency, CurrencyConversion, CurrencyRelations} from '../../models';
import {CountryRepository} from './country.repository';
import {CurrencyConversionRepository} from './currency-conversion.repository';

export class CurrencyRepository extends BaseLocalRepository<Currency, typeof Currency.prototype.id, CurrencyRelations> {
  public readonly country: BelongsToAccessor<Country, typeof Currency.prototype.id>;

  public readonly conversions: HasManyRepositoryFactory<CurrencyConversion, typeof Currency.prototype.id>;
  public readonly reverseConversions: HasManyRepositoryFactory<CurrencyConversion, typeof Currency.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('CountryRepository') countryRepositoryGetter: Getter<CountryRepository>,
    @repository.getter('CurrencyConversionRepository') currencyConversionRepositoryGetter: Getter<CurrencyConversionRepository>
  ) {
    super(Currency, dataSource);
    this.country = this.createBelongsToAccessorFor('country', countryRepositoryGetter);

    this.conversions = this.createHasManyRepositoryFactoryFor('conversions', currencyConversionRepositoryGetter);
    this.reverseConversions = this.createHasManyRepositoryFactoryFor('reverseConversions', currencyConversionRepositoryGetter);

    this.registerInclusionResolver('conversions', this.conversions.inclusionResolver);
    this.registerInclusionResolver('reverseConversions', this.reverseConversions.inclusionResolver);
  }
}
