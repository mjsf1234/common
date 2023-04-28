import { BaseLocalRepository, DepositDetailsRepository, AuditTrailRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, HasOneRepositoryFactory } from '@loopback/repository';
import { Account, DepositDetails, Gain, HistoricalHolding, Holding, ServiceProvider, ServiceProviderAccount, ServiceProviderAccountRelations, SystematicMethod, Transaction, OrderItem, AuditTrail } from '../../models';
import { AccountRepository } from '../user-management';
import { ServiceProviderRepository } from '../master-data';
import { TransactionRepository } from './transaction.repository';
import { HoldingRepository } from './holding.repository';
import { HistoricalHoldingRepository } from './historical-holding.repository';
import { SystematicMethodRepository } from './systematic-method.repository';
import { OrderItemRepository } from '../order-execution';
import { GainRepository } from './gain.repository';
export declare class ServiceProviderAccountRepository extends BaseLocalRepository<ServiceProviderAccount, typeof ServiceProviderAccount.prototype.id, ServiceProviderAccountRelations> {
    readonly account: BelongsToAccessor<Account, typeof ServiceProviderAccount.prototype.id>;
    readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof ServiceProviderAccount.prototype.id>;
    readonly transactions: HasManyRepositoryFactory<Transaction, typeof ServiceProviderAccount.prototype.id>;
    readonly holdings: HasManyRepositoryFactory<Holding, typeof ServiceProviderAccount.prototype.id>;
    readonly systematicMethods: HasManyRepositoryFactory<SystematicMethod, typeof ServiceProviderAccount.prototype.id>;
    readonly orderItems: HasManyRepositoryFactory<OrderItem, typeof ServiceProviderAccount.prototype.id>;
    readonly historicalHoldings: HasManyRepositoryFactory<HistoricalHolding, typeof ServiceProviderAccount.prototype.id>;
    readonly gains: HasManyRepositoryFactory<Gain, typeof ServiceProviderAccount.prototype.id>;
    readonly depositDetails: HasManyRepositoryFactory<DepositDetails, typeof ServiceProviderAccount.prototype.id>;
    readonly auditTrail: HasOneRepositoryFactory<AuditTrail, typeof ServiceProviderAccount.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>, transactionRepositoryGetter: Getter<TransactionRepository>, holdingRepositoryGetter: Getter<HoldingRepository>, systematicMethodRepositoryGetter: Getter<SystematicMethodRepository>, orderItemRepositoryGetter: Getter<OrderItemRepository>, historicalHoldingRepositoryGetter: Getter<HistoricalHoldingRepository>, gainRepositoryGetter: Getter<GainRepository>, depositDetailsRepositoryGetter: Getter<DepositDetailsRepository>, AuditTrailRepositoryGetter: Getter<AuditTrailRepository>);
}
