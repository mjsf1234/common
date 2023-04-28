import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Currency, Gain, GainRelations, Instrument, Product, ServiceProviderAccount, Transaction } from '../../models';
import { ServiceProviderAccountRepository } from './service-provider-account.repository';
import { CurrencyRepository, InstrumentRepository, ProductRepository } from '../master-data';
import { TransactionRepository } from './transaction.repository';
export declare class GainRepository extends BaseLocalRepository<Gain, typeof Gain.prototype.id, GainRelations> {
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof Gain.prototype.id>;
    readonly instrument: BelongsToAccessor<Instrument, typeof Gain.prototype.id>;
    readonly currency: BelongsToAccessor<Currency, typeof Gain.prototype.id>;
    readonly buyTransaction: BelongsToAccessor<Transaction, typeof Gain.prototype.id>;
    readonly sellTransaction: BelongsToAccessor<Transaction, typeof Gain.prototype.id>;
    readonly product: BelongsToAccessor<Product, typeof Gain.prototype.id>;
    constructor(dataSource: juggler.DataSource, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, instrumentRepositoryGetter: Getter<InstrumentRepository>, currencyRepositoryGetter: Getter<CurrencyRepository>, buyTransactionRepositoryGetter: Getter<TransactionRepository>, sellTransactionRepositoryGetter: Getter<TransactionRepository>, productRepositoryGetter: Getter<ProductRepository>);
}
