import { AccountRepository, BaseLocalRepository, CartItemRepository, OrderItemRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Account, CartItem, OrderItem, TransactionTwoFa, TransactionTwoFaRelations } from '../../models';
export declare class TransactionTwoFaRepository extends BaseLocalRepository<TransactionTwoFa, typeof TransactionTwoFa.prototype.id, TransactionTwoFaRelations> {
    readonly cartItemSmsGroups: HasManyRepositoryFactory<CartItem, typeof TransactionTwoFa.prototype.id>;
    readonly orderItemSmsGroups: HasManyRepositoryFactory<OrderItem, typeof TransactionTwoFa.prototype.id>;
    readonly cartItemEmailGroups: HasManyRepositoryFactory<CartItem, typeof TransactionTwoFa.prototype.id>;
    readonly orderItemEmailGroups: HasManyRepositoryFactory<OrderItem, typeof TransactionTwoFa.prototype.id>;
    readonly account: BelongsToAccessor<Account, typeof TransactionTwoFa.prototype.id>;
    constructor(dataSource: juggler.DataSource, cartItemRepositoryGetter: Getter<CartItemRepository>, orderItemRepositoryGetter: Getter<OrderItemRepository>, accountRepository: Getter<AccountRepository>);
}
