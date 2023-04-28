import { BaseLocalRepository, TransactionTwoFaRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Cart, CartItem, CartItemRelations, Goal, Instrument, ServiceProviderAccount, TransactionType, SystematicMethod, TransactionTwoFa } from '../../models';
import { CartRepository } from './cart.repository';
import { InstrumentRepository, TransactionTypeRepository } from '../master-data';
import { ServiceProviderAccountRepository, SystematicMethodRepository } from '../transaction';
import { GoalRepository } from './goal.repository';
export declare class CartItemRepository extends BaseLocalRepository<CartItem, typeof CartItem.prototype.id, CartItemRelations> {
    readonly cart: BelongsToAccessor<Cart, typeof CartItem.prototype.id>;
    readonly instrument: BelongsToAccessor<Instrument, typeof CartItem.prototype.id>;
    readonly secondaryInstrument: BelongsToAccessor<Instrument, typeof CartItem.prototype.id>;
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof CartItem.prototype.id>;
    readonly transactionType: BelongsToAccessor<TransactionType, typeof CartItem.prototype.id>;
    readonly goal: BelongsToAccessor<Goal, typeof CartItem.prototype.id>;
    readonly systematicMethod: BelongsToAccessor<SystematicMethod, typeof CartItem.prototype.id>;
    readonly transactionTwoFaSms: BelongsToAccessor<TransactionTwoFa, typeof CartItem.prototype.id>;
    readonly transactionTwoFaEmail: BelongsToAccessor<TransactionTwoFa, typeof CartItem.prototype.id>;
    constructor(dataSource: juggler.DataSource, cartRepositoryGetter: Getter<CartRepository>, instrumentRepositoryGetter: Getter<InstrumentRepository>, secondaryInstrumentRepositoryGetter: Getter<InstrumentRepository>, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>, goalRepositoryGetter: Getter<GoalRepository>, systematicMethodRepositoryGetter: Getter<SystematicMethodRepository>, transactionTwoFaRepositoryGetter: Getter<TransactionTwoFaRepository>);
}
