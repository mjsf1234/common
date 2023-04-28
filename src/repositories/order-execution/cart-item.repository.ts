import {BaseLocalRepository, TransactionTwoFaRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Cart, CartItem, CartItemRelations, Goal, Instrument, ServiceProviderAccount, TransactionType, SystematicMethod, TransactionTwoFa} from '../../models';
import {CartRepository} from './cart.repository';
import {InstrumentRepository, TransactionTypeRepository} from '../master-data';
import {ServiceProviderAccountRepository, SystematicMethodRepository} from '../transaction';
import {GoalRepository} from './goal.repository';

export class CartItemRepository extends BaseLocalRepository<CartItem, typeof CartItem.prototype.id, CartItemRelations> {
  public readonly cart: BelongsToAccessor<Cart, typeof CartItem.prototype.id>;
  public readonly instrument: BelongsToAccessor<Instrument, typeof CartItem.prototype.id>;
  public readonly secondaryInstrument: BelongsToAccessor<Instrument, typeof CartItem.prototype.id>;
  public readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof CartItem.prototype.id>;
  public readonly transactionType: BelongsToAccessor<TransactionType, typeof CartItem.prototype.id>;
  public readonly goal: BelongsToAccessor<Goal, typeof CartItem.prototype.id>;
  public readonly systematicMethod: BelongsToAccessor<SystematicMethod, typeof CartItem.prototype.id>;
  public readonly transactionTwoFaSms: BelongsToAccessor<TransactionTwoFa, typeof CartItem.prototype.id>;
  public readonly transactionTwoFaEmail: BelongsToAccessor<TransactionTwoFa, typeof CartItem.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('CartRepository') cartRepositoryGetter: Getter<CartRepository>,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('InstrumentRepository') secondaryInstrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('TransactionTypeRepository') transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>,
    @repository.getter('GoalRepository') goalRepositoryGetter: Getter<GoalRepository>,
    @repository.getter('SystematicMethodRepository') systematicMethodRepositoryGetter: Getter<SystematicMethodRepository>,
    @repository.getter('TransactionTwoFaRepository') transactionTwoFaRepositoryGetter: Getter<TransactionTwoFaRepository>
  ) {
    super(CartItem, dataSource);
    this.cart = this.createBelongsToAccessorFor('cart', cartRepositoryGetter);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.secondaryInstrument = this.createBelongsToAccessorFor('secondaryInstrument', secondaryInstrumentRepositoryGetter);
    this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
    this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);
    this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);
    this.systematicMethod = this.createBelongsToAccessorFor('systematicMethod', systematicMethodRepositoryGetter);
    this.transactionTwoFaSms = this.createBelongsToAccessorFor('transactionTwoFaSms', transactionTwoFaRepositoryGetter);
    this.transactionTwoFaEmail = this.createBelongsToAccessorFor('transactionTwoFaEmail', transactionTwoFaRepositoryGetter);

    this.registerInclusionResolver('cart', this.cart.inclusionResolver);
    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('secondaryInstrument', this.secondaryInstrument.inclusionResolver);
    this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
    this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
    this.registerInclusionResolver('goal', this.goal.inclusionResolver);
    this.registerInclusionResolver('systematicMethod', this.systematicMethod.inclusionResolver);
    this.registerInclusionResolver('transactionTwoFaSms', this.transactionTwoFaSms.inclusionResolver);
    this.registerInclusionResolver('transactionTwoFaEmail', this.transactionTwoFaEmail.inclusionResolver);
  }
}
