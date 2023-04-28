import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Country, Currency, CurrencyConversion, CurrencyRelations } from '../../models';
import { CountryRepository } from './country.repository';
import { CurrencyConversionRepository } from './currency-conversion.repository';
export declare class CurrencyRepository extends BaseLocalRepository<Currency, typeof Currency.prototype.id, CurrencyRelations> {
    readonly country: BelongsToAccessor<Country, typeof Currency.prototype.id>;
    readonly conversions: HasManyRepositoryFactory<CurrencyConversion, typeof Currency.prototype.id>;
    readonly reverseConversions: HasManyRepositoryFactory<CurrencyConversion, typeof Currency.prototype.id>;
    constructor(dataSource: juggler.DataSource, countryRepositoryGetter: Getter<CountryRepository>, currencyConversionRepositoryGetter: Getter<CurrencyConversionRepository>);
}
