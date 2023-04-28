import {BaseLocalRepository, CartRepository, AccountRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {TransactionVerification, TransactionVerificationRelations, Account, Cart} from '../../models';

export class TransactionVerificationRepository extends BaseLocalRepository<
TransactionVerification,
  typeof TransactionVerification.prototype.id,
  TransactionVerificationRelations
> {
  public readonly account: BelongsToAccessor<Account, typeof TransactionVerification.prototype.id>;
  public readonly cart: BelongsToAccessor<Cart, typeof TransactionVerification.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('CartRepository') cartRepositoryGetter: Getter<CartRepository>,
    @repository.getter('AccountRepository') accountRepository: Getter<AccountRepository>
  ) {
    super(TransactionVerification, dataSource);
    this.cart = this.createBelongsToAccessorFor('cart', cartRepositoryGetter);
    this.account = this.createBelongsToAccessorFor('account', accountRepository);

    this.registerInclusionResolver('cart', this.cart.inclusionResolver);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
  }
}
