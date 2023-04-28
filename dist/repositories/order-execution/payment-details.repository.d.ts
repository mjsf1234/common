import { BaseLocalRepository, OrderItemRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { PaymentDetails, PaymentDetailsRelations, BankAccount, OrderItem } from '../../models';
import { BankAccountRepository } from '../user-management';
export declare class PaymentDetailsRepository extends BaseLocalRepository<PaymentDetails, typeof PaymentDetails.prototype.id, PaymentDetailsRelations> {
    readonly orderItem: BelongsToAccessor<OrderItem, typeof PaymentDetails.prototype.id>;
    readonly bankAccount: BelongsToAccessor<BankAccount, typeof PaymentDetails.prototype.id>;
    constructor(dataSource: juggler.DataSource, orderItemRepositoryGetter: Getter<OrderItemRepository>, bankAccountRepository: Getter<BankAccountRepository>);
}
