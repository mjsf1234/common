import { BaseLocalRepository, CartRepository, AccountRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { TransactionVerification, TransactionVerificationRelations, Account, Cart } from '../../models';
export declare class TransactionVerificationRepository extends BaseLocalRepository<TransactionVerification, typeof TransactionVerification.prototype.id, TransactionVerificationRelations> {
    readonly account: BelongsToAccessor<Account, typeof TransactionVerification.prototype.id>;
    readonly cart: BelongsToAccessor<Cart, typeof TransactionVerification.prototype.id>;
    constructor(dataSource: juggler.DataSource, cartRepositoryGetter: Getter<CartRepository>, accountRepository: Getter<AccountRepository>);
}
