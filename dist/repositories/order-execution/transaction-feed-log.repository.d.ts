import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, juggler, Getter, HasManyRepositoryFactory } from '@loopback/repository';
import { TransactionFeedLog, TransactionFeedLogRelations, Rta, OrderItem, OrderExecutionAppFile } from '../../models';
import { RtaRepository } from './../master-data/rta.repository';
import { OrderItemRepository } from './order-item.repository';
import { OrderExecutionAppFileRepository } from './order-execution-app-file.repository';
export declare class TransactionFeedLogRepository extends BaseLocalRepository<TransactionFeedLog, typeof TransactionFeedLog.prototype.id, TransactionFeedLogRelations> {
    readonly rta: BelongsToAccessor<Rta, typeof TransactionFeedLog.prototype.id>;
    readonly txnFeedFile: BelongsToAccessor<OrderExecutionAppFile, typeof TransactionFeedLog.prototype.id>;
    readonly orderItems: HasManyRepositoryFactory<OrderItem, typeof TransactionFeedLog.prototype.id>;
    constructor(dataSource: juggler.DataSource, rtaRepositoryGetter: Getter<RtaRepository>, orderExecutionAppFileRepositoryGetter: Getter<OrderExecutionAppFileRepository>, orderItemRepositoryGetter: Getter<OrderItemRepository>);
}
