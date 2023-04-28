import {AccountRepository, BaseLocalRepository, CartItemRepository, OrderItemRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Account, CartItem, OrderItem, TransactionTwoFa, TransactionTwoFaRelations} from '../../models';

export class TransactionTwoFaRepository extends BaseLocalRepository<
  TransactionTwoFa,
  typeof TransactionTwoFa.prototype.id,
  TransactionTwoFaRelations
> {
  public readonly cartItemSmsGroups: HasManyRepositoryFactory<CartItem, typeof TransactionTwoFa.prototype.id>;
  public readonly orderItemSmsGroups: HasManyRepositoryFactory<OrderItem, typeof TransactionTwoFa.prototype.id>;
  public readonly cartItemEmailGroups: HasManyRepositoryFactory<CartItem, typeof TransactionTwoFa.prototype.id>;
  public readonly orderItemEmailGroups: HasManyRepositoryFactory<OrderItem, typeof TransactionTwoFa.prototype.id>;
  public readonly account: BelongsToAccessor<Account, typeof TransactionTwoFa.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('CartItemRepository') cartItemRepositoryGetter: Getter<CartItemRepository>,
    @repository.getter('OrderItemRepository') orderItemRepositoryGetter: Getter<OrderItemRepository>,
    @repository.getter('AccountRepository') accountRepository: Getter<AccountRepository>
  ) {
    super(TransactionTwoFa, dataSource);

    this.orderItemSmsGroups = this.createHasManyRepositoryFactoryFor('orderItemSmsGroups', orderItemRepositoryGetter);
    this.cartItemSmsGroups = this.createHasManyRepositoryFactoryFor('cartItemSmsGroups', cartItemRepositoryGetter);
    this.orderItemEmailGroups = this.createHasManyRepositoryFactoryFor('orderItemEmailGroups', orderItemRepositoryGetter);
    this.cartItemEmailGroups = this.createHasManyRepositoryFactoryFor('cartItemEmailGroups', cartItemRepositoryGetter);
    this.account = this.createBelongsToAccessorFor('account', accountRepository);

    this.registerInclusionResolver('cartItemSmsGroups', this.cartItemSmsGroups.inclusionResolver);
    this.registerInclusionResolver('orderItemSmsGroups', this.orderItemSmsGroups.inclusionResolver);
    this.registerInclusionResolver('cartItemEmailGroups', this.cartItemEmailGroups.inclusionResolver);
    this.registerInclusionResolver('orderItemEmailGroups', this.orderItemEmailGroups.inclusionResolver);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
  }
}
