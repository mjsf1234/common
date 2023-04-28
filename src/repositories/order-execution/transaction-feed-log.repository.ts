import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, juggler, repository, Getter, HasManyRepositoryFactory} from '@loopback/repository';
import {TransactionFeedLog, TransactionFeedLogRelations, Rta, OrderItem, OrderExecutionAppFile} from '../../models';
import {RtaRepository} from './../master-data/rta.repository';
import {OrderItemRepository} from './order-item.repository';
import { OrderExecutionAppFileRepository } from './order-execution-app-file.repository';

export class TransactionFeedLogRepository extends BaseLocalRepository<
  TransactionFeedLog,
  typeof TransactionFeedLog.prototype.id,
  TransactionFeedLogRelations
> {
  public readonly rta: BelongsToAccessor<Rta, typeof TransactionFeedLog.prototype.id>;
  public readonly txnFeedFile: BelongsToAccessor<OrderExecutionAppFile, typeof TransactionFeedLog.prototype.id>;
  public readonly orderItems: HasManyRepositoryFactory<OrderItem, typeof TransactionFeedLog.prototype.id>;
  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('RtaRepository') rtaRepositoryGetter: Getter<RtaRepository>,
    @repository.getter('OrderExecutionAppFileRepository') orderExecutionAppFileRepositoryGetter: Getter<OrderExecutionAppFileRepository>,
    @repository.getter('OrderItemRepository') orderItemRepositoryGetter: Getter<OrderItemRepository>
  ) {
    super(TransactionFeedLog, dataSource);
    this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
    this.txnFeedFile = this.createBelongsToAccessorFor('txnFeedFile', orderExecutionAppFileRepositoryGetter);
    this.orderItems = this.createHasManyRepositoryFactoryFor('orderItems', orderItemRepositoryGetter);

    this.registerInclusionResolver('rta', this.rta.inclusionResolver);
    this.registerInclusionResolver('txnFeedFile', this.txnFeedFile.inclusionResolver);
    this.registerInclusionResolver('orderItems', this.orderItems.inclusionResolver);
  }
}
