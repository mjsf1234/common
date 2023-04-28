import {BaseLocalRepository, OrderItemRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {PaymentDetails, PaymentDetailsRelations, BankAccount, OrderItem} from '../../models';
import {BankAccountRepository} from '../user-management';

export class PaymentDetailsRepository extends BaseLocalRepository<
  PaymentDetails,
  typeof PaymentDetails.prototype.id,
  PaymentDetailsRelations
> {
  public readonly orderItem: BelongsToAccessor<OrderItem, typeof PaymentDetails.prototype.id>;
  public readonly bankAccount: BelongsToAccessor<BankAccount, typeof PaymentDetails.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('OrderItemRepository') orderItemRepositoryGetter: Getter<OrderItemRepository>,
    @repository.getter('BankAccountRepository') bankAccountRepository: Getter<BankAccountRepository>
  ) {
    super(PaymentDetails, dataSource);
    this.orderItem = this.createBelongsToAccessorFor('orderItem', orderItemRepositoryGetter);
    this.bankAccount = this.createBelongsToAccessorFor('bankAccount', bankAccountRepository);

    this.registerInclusionResolver('orderItem', this.orderItem.inclusionResolver);
    this.registerInclusionResolver('bankAccount', this.bankAccount.inclusionResolver);
  }
}
