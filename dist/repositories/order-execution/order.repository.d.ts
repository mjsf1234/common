import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Account, Order, OrderItem, OrderRelations } from '../../models';
import { AccountRepository } from '../user-management';
import { OrderItemRepository } from './order-item.repository';
export declare class OrderRepository extends BaseLocalRepository<Order, typeof Order.prototype.id, OrderRelations> {
    readonly account: BelongsToAccessor<Account, typeof Order.prototype.id>;
    readonly orderItems: HasManyRepositoryFactory<OrderItem, typeof Order.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, orderItemRepositoryGetter: Getter<OrderItemRepository>);
}
