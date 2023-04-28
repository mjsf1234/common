import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Currency, CurrencyConversion, CurrencyConversionRelations} from '../../models';
import {CurrencyRepository} from './currency.repository';

export class CurrencyConversionRepository extends BaseLocalRepository<
  CurrencyConversion,
  typeof CurrencyConversion.prototype.id,
  CurrencyConversionRelations
> {
  public readonly targetCurrency: BelongsToAccessor<Currency, typeof CurrencyConversion.prototype.id>;
  public readonly baseCurrency: BelongsToAccessor<Currency, typeof CurrencyConversion.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('CurrencyRepository')
    targetCurrencyRepositoryGetter: Getter<CurrencyRepository>,
    @repository.getter('CurrencyRepository')
    baseCurrencyRepositoryGetter: Getter<CurrencyRepository>
  ) {
    super(CurrencyConversion, dataSource);
    this.targetCurrency = this.createBelongsToAccessorFor('targetCurrency', targetCurrencyRepositoryGetter);
    this.baseCurrency = this.createBelongsToAccessorFor('baseCurrency', baseCurrencyRepositoryGetter);

    this.registerInclusionResolver('targetCurrency', this.targetCurrency.inclusionResolver);
    this.registerInclusionResolver('baseCurrency', this.baseCurrency.inclusionResolver);
  }
}
