import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Account, Order, OrderItem, OrderRelations} from '../../models';
import {AccountRepository} from '../user-management';
import {OrderItemRepository} from './order-item.repository';

export class OrderRepository extends BaseLocalRepository<Order, typeof Order.prototype.id, OrderRelations> {
  public readonly account: BelongsToAccessor<Account, typeof Order.prototype.id>;

  public readonly orderItems: HasManyRepositoryFactory<OrderItem, typeof Order.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('OrderItemRepository') orderItemRepositoryGetter: Getter<OrderItemRepository>
  ) {
    super(Order, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);

    this.orderItems = this.createHasManyRepositoryFactoryFor('orderItems', orderItemRepositoryGetter);

    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('orderItems', this.orderItems.inclusionResolver);
  }
}
