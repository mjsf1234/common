import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Account, AppUser, Cart, CartItem, CartRelations} from '../../models';
import {AccountRepository, AppUserRepository} from '../user-management';
import {CartItemRepository} from './cart-item.repository';

export class CartRepository extends BaseLocalRepository<Cart, typeof Cart.prototype.id, CartRelations> {
  public readonly createdByAppUser: BelongsToAccessor<AppUser, typeof Cart.prototype.id>;
  public readonly account: BelongsToAccessor<Account, typeof Cart.prototype.id>;

  public readonly cartItems: HasManyRepositoryFactory<CartItem, typeof Cart.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') createdByAppUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('CartItemRepository') cartItemRepositoryGetter: Getter<CartItemRepository>
  ) {
    super(Cart, dataSource);
    this.createdByAppUser = this.createBelongsToAccessorFor('createdByAppUser', createdByAppUserRepositoryGetter);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);

    this.cartItems = this.createHasManyRepositoryFactoryFor('cartItems', cartItemRepositoryGetter);

    this.registerInclusionResolver('createdByAppUser', this.createdByAppUser.inclusionResolver);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('cartItems', this.cartItems.inclusionResolver);
  }
}
