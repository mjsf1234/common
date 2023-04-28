import {BaseLocalRepository, DepositDetailsRepository, AuditTrailRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {
  Account,
  AppUser,
  DepositDetails,
  Gain,
  HistoricalHolding,
  Holding,
  ServiceProvider,
  ServiceProviderAccount,
  ServiceProviderAccountRelations,
  SystematicMethod,
  Transaction,
  OrderItem,
  AuditTrail
} from '../../models';
import {AccountRepository} from '../user-management';
import {ServiceProviderRepository} from '../master-data';
import {TransactionRepository} from './transaction.repository';
import {HoldingRepository} from './holding.repository';
import {HistoricalHoldingRepository} from './historical-holding.repository';
import {SystematicMethodRepository } from './systematic-method.repository'; 
import {OrderItemRepository } from '../order-execution';
import {GainRepository} from './gain.repository';

export class ServiceProviderAccountRepository extends BaseLocalRepository<
  ServiceProviderAccount,
  typeof ServiceProviderAccount.prototype.id,
  ServiceProviderAccountRelations
> {
  public readonly account: BelongsToAccessor<Account, typeof ServiceProviderAccount.prototype.id>;
  public readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof ServiceProviderAccount.prototype.id>;

  public readonly transactions: HasManyRepositoryFactory<Transaction, typeof ServiceProviderAccount.prototype.id>;
  public readonly holdings: HasManyRepositoryFactory<Holding, typeof ServiceProviderAccount.prototype.id>;
  public readonly systematicMethods: HasManyRepositoryFactory<SystematicMethod, typeof ServiceProviderAccount.prototype.id>;
  public readonly orderItems: HasManyRepositoryFactory<OrderItem, typeof ServiceProviderAccount.prototype.id>;  
  public readonly historicalHoldings: HasManyRepositoryFactory<HistoricalHolding, typeof ServiceProviderAccount.prototype.id>;
  public readonly gains: HasManyRepositoryFactory<Gain, typeof ServiceProviderAccount.prototype.id>;
  public readonly depositDetails: HasManyRepositoryFactory<DepositDetails, typeof ServiceProviderAccount.prototype.id>;
  public readonly auditTrail: HasOneRepositoryFactory<AuditTrail, typeof ServiceProviderAccount.prototype.id>;
  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('ServiceProviderRepository') serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>,
    @repository.getter('TransactionRepository') transactionRepositoryGetter: Getter<TransactionRepository>,
    @repository.getter('HoldingRepository') holdingRepositoryGetter: Getter<HoldingRepository>,
    @repository.getter('SystematicMethodRepository') systematicMethodRepositoryGetter: Getter<SystematicMethodRepository>,
    @repository.getter('OrderItemRepository') orderItemRepositoryGetter: Getter<OrderItemRepository>,
    @repository.getter('HistoricalHoldingRepository') historicalHoldingRepositoryGetter: Getter<HistoricalHoldingRepository>,
    @repository.getter('GainRepository') gainRepositoryGetter: Getter<GainRepository>,
    @repository.getter('DepositDetailsRepository') depositDetailsRepositoryGetter: Getter<DepositDetailsRepository>,
    @repository.getter('AuditTrailRepository') AuditTrailRepositoryGetter: Getter<AuditTrailRepository>
  ) {
    super(ServiceProviderAccount, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);

    this.transactions = this.createHasManyRepositoryFactoryFor('transactions', transactionRepositoryGetter);
    this.holdings = this.createHasManyRepositoryFactoryFor('holdings', holdingRepositoryGetter);
    this.systematicMethods = this.createHasManyRepositoryFactoryFor('systematicMethods', systematicMethodRepositoryGetter);
    this.orderItems = this.createHasManyRepositoryFactoryFor('orderItems', orderItemRepositoryGetter);
    this.historicalHoldings = this.createHasManyRepositoryFactoryFor('historicalHoldings', historicalHoldingRepositoryGetter);
    this.gains = this.createHasManyRepositoryFactoryFor('gains', gainRepositoryGetter);
    this.depositDetails = this.createHasManyRepositoryFactoryFor('depositDetails', depositDetailsRepositoryGetter);
    this.auditTrail = this.createHasOneRepositoryFactoryFor('auditTrail', AuditTrailRepositoryGetter);

    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
    this.registerInclusionResolver('transactions', this.transactions.inclusionResolver);
    this.registerInclusionResolver('holdings', this.holdings.inclusionResolver);
    this.registerInclusionResolver('systematicMethods', this.systematicMethods.inclusionResolver);
    this.registerInclusionResolver('orderItems', this.orderItems.inclusionResolver);
    this.registerInclusionResolver('historicalHoldings', this.historicalHoldings.inclusionResolver);
    this.registerInclusionResolver('gains', this.gains.inclusionResolver);
    this.registerInclusionResolver('depositDetails', this.depositDetails.inclusionResolver);
    this.registerInclusionResolver('auditTrail', this.auditTrail.inclusionResolver);
  }
}
