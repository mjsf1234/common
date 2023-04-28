import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Currency, Gain, GainRelations, Instrument, Product, ServiceProviderAccount, Transaction} from '../../models';
import {ServiceProviderAccountRepository} from './service-provider-account.repository';
import {CurrencyRepository, InstrumentRepository, ProductRepository} from '../master-data';
import {TransactionRemoteRestDataSource} from '../../datasources';
import {TransactionRepository} from './transaction.repository';

export class GainRepository extends BaseLocalRepository<Gain, typeof Gain.prototype.id, GainRelations> {
  public readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof Gain.prototype.id>;
  public readonly instrument: BelongsToAccessor<Instrument, typeof Gain.prototype.id>;
  public readonly currency: BelongsToAccessor<Currency, typeof Gain.prototype.id>;
  public readonly buyTransaction: BelongsToAccessor<Transaction, typeof Gain.prototype.id>;
  public readonly sellTransaction: BelongsToAccessor<Transaction, typeof Gain.prototype.id>;
  public readonly product: BelongsToAccessor<Product, typeof Gain.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('CurrencyRepository') currencyRepositoryGetter: Getter<CurrencyRepository>,
    @repository.getter('TransactionRepository') buyTransactionRepositoryGetter: Getter<TransactionRepository>,
    @repository.getter('TransactionRepository') sellTransactionRepositoryGetter: Getter<TransactionRepository>,
    @repository.getter('ProductRepository') productRepositoryGetter: Getter<ProductRepository>
  ) {
    super(Gain, dataSource);
    this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);
    this.buyTransaction = this.createBelongsToAccessorFor('buyTransaction', buyTransactionRepositoryGetter);
    this.sellTransaction = this.createBelongsToAccessorFor('sellTransaction', sellTransactionRepositoryGetter);
    this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter);

    this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('currency', this.currency.inclusionResolver);
    this.registerInclusionResolver('buyTransaction', this.buyTransaction.inclusionResolver);
    this.registerInclusionResolver('sellTransaction', this.sellTransaction.inclusionResolver);
    this.registerInclusionResolver('product', this.product.inclusionResolver);
  }
}
