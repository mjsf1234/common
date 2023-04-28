import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {
  ActionLog,
  AppUser,
  Instrument,
  OrderItem,
  ReverseFeed,
  ReverseFeedReconciliation,
  ReverseFeedReconciliationRelations,
  ServiceProvider,
  Transaction,
  TransactionType
} from '../../models';
import {ReverseFeedRepository} from './reverse-feed.repository';
import {TransactionRepository} from './transaction.repository';
import {InstrumentRepository, ServiceProviderRepository, TransactionTypeRepository} from '../master-data';
import {OrderItemRepository} from '../order-execution';

export class ReverseFeedReconciliationRepository extends BaseLocalRepository<
  ReverseFeedReconciliation,
  typeof ReverseFeedReconciliation.prototype.id,
  ReverseFeedReconciliationRelations
> {
  public readonly reverseFeed: BelongsToAccessor<ReverseFeed, typeof ReverseFeedReconciliation.prototype.id>;
  public readonly transaction: BelongsToAccessor<Transaction, typeof ReverseFeedReconciliation.prototype.id>;
  public readonly instrument: BelongsToAccessor<Instrument, typeof ReverseFeedReconciliation.prototype.id>;
  public readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof ReverseFeedReconciliation.prototype.id>;
  public readonly orderItem: BelongsToAccessor<OrderItem, typeof ReverseFeedReconciliation.prototype.id>;
  public readonly transactionType: BelongsToAccessor<TransactionType, typeof ReverseFeedReconciliation.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ReverseFeedRepository') reverseFeedRepositoryGetter: Getter<ReverseFeedRepository>,
    @repository.getter('TransactionRepository') transactionRepositoryGetter: Getter<TransactionRepository>,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('ServiceProviderRepository') serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>,
    @repository.getter('OrderItemRepository') orderItemRepositoryGetter: Getter<OrderItemRepository>,
    @repository.getter('TransactionTypeRepository') transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>
  ) {
    super(ReverseFeedReconciliation, dataSource);
    this.reverseFeed = this.createBelongsToAccessorFor('reverseFeed', reverseFeedRepositoryGetter);
    this.transaction = this.createBelongsToAccessorFor('transaction', transactionRepositoryGetter);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);
    this.orderItem = this.createBelongsToAccessorFor('orderItem', orderItemRepositoryGetter);
    this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);

    this.registerInclusionResolver('reverseFeed', this.reverseFeed.inclusionResolver);
    this.registerInclusionResolver('transaction', this.transaction.inclusionResolver);
    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
    this.registerInclusionResolver('orderItem', this.orderItem.inclusionResolver);
    this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
  }
}
