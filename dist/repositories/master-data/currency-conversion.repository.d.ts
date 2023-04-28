import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Currency, CurrencyConversion, CurrencyConversionRelations } from '../../models';
import { CurrencyRepository } from './currency.repository';
export declare class CurrencyConversionRepository extends BaseLocalRepository<CurrencyConversion, typeof CurrencyConversion.prototype.id, CurrencyConversionRelations> {
    readonly targetCurrency: BelongsToAccessor<Currency, typeof CurrencyConversion.prototype.id>;
    readonly baseCurrency: BelongsToAccessor<Currency, typeof CurrencyConversion.prototype.id>;
    constructor(dataSource: juggler.DataSource, targetCurrencyRepositoryGetter: Getter<CurrencyRepository>, baseCurrencyRepositoryGetter: Getter<CurrencyRepository>);
}
