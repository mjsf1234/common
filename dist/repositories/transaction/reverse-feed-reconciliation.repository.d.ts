import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Instrument, OrderItem, ReverseFeed, ReverseFeedReconciliation, ReverseFeedReconciliationRelations, ServiceProvider, Transaction, TransactionType } from '../../models';
import { ReverseFeedRepository } from './reverse-feed.repository';
import { TransactionRepository } from './transaction.repository';
import { InstrumentRepository, ServiceProviderRepository, TransactionTypeRepository } from '../master-data';
import { OrderItemRepository } from '../order-execution';
export declare class ReverseFeedReconciliationRepository extends BaseLocalRepository<ReverseFeedReconciliation, typeof ReverseFeedReconciliation.prototype.id, ReverseFeedReconciliationRelations> {
    readonly reverseFeed: BelongsToAccessor<ReverseFeed, typeof ReverseFeedReconciliation.prototype.id>;
    readonly transaction: BelongsToAccessor<Transaction, typeof ReverseFeedReconciliation.prototype.id>;
    readonly instrument: BelongsToAccessor<Instrument, typeof ReverseFeedReconciliation.prototype.id>;
    readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof ReverseFeedReconciliation.prototype.id>;
    readonly orderItem: BelongsToAccessor<OrderItem, typeof ReverseFeedReconciliation.prototype.id>;
    readonly transactionType: BelongsToAccessor<TransactionType, typeof ReverseFeedReconciliation.prototype.id>;
    constructor(dataSource: juggler.DataSource, reverseFeedRepositoryGetter: Getter<ReverseFeedRepository>, transactionRepositoryGetter: Getter<TransactionRepository>, instrumentRepositoryGetter: Getter<InstrumentRepository>, serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>, orderItemRepositoryGetter: Getter<OrderItemRepository>, transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>);
}
