import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Account, AppUser, Cart, CartItem, CartRelations } from '../../models';
import { AccountRepository, AppUserRepository } from '../user-management';
import { CartItemRepository } from './cart-item.repository';
export declare class CartRepository extends BaseLocalRepository<Cart, typeof Cart.prototype.id, CartRelations> {
    readonly createdByAppUser: BelongsToAccessor<AppUser, typeof Cart.prototype.id>;
    readonly account: BelongsToAccessor<Account, typeof Cart.prototype.id>;
    readonly cartItems: HasManyRepositoryFactory<CartItem, typeof Cart.prototype.id>;
    constructor(dataSource: juggler.DataSource, createdByAppUserRepositoryGetter: Getter<AppUserRepository>, accountRepositoryGetter: Getter<AccountRepository>, cartItemRepositoryGetter: Getter<CartItemRepository>);
}
