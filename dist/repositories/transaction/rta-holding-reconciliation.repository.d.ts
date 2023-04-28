import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUser, Holding, Instrument, RtaHolding, RtaHoldingReconciliation, RtaHoldingReconciliationRelations, ServiceProvider, ServiceProviderAccount } from '../../models';
import { RtaHoldingRepository } from './rta-holding.repository';
import { InstrumentRepository, ServiceProviderRepository } from '../master-data';
import { ServiceProviderAccountRepository } from './service-provider-account.repository';
import { AppUserRepository } from '../user-management';
import { HoldingRepository } from './holding.repository';
export declare class RtaHoldingReconciliationRepository extends BaseLocalRepository<RtaHoldingReconciliation, typeof RtaHoldingReconciliation.prototype.id, RtaHoldingReconciliationRelations> {
    readonly rtaHolding: BelongsToAccessor<RtaHolding, typeof RtaHoldingReconciliation.prototype.id>;
    readonly instrument: BelongsToAccessor<Instrument, typeof RtaHoldingReconciliation.prototype.id>;
    readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof RtaHoldingReconciliation.prototype.id>;
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof RtaHoldingReconciliation.prototype.id>;
    readonly uploadedByAppUser: BelongsToAccessor<AppUser, typeof RtaHoldingReconciliation.prototype.id>;
    readonly holding: BelongsToAccessor<Holding, typeof RtaHoldingReconciliation.prototype.id>;
    constructor(dataSource: juggler.DataSource, rtaHoldingRepositoryGetter: Getter<RtaHoldingRepository>, instrumentRepositoryGetter: Getter<InstrumentRepository>, serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, uploadedByAppUserRepositoryGetter: Getter<AppUserRepository>, holdingRepositoryGetter: Getter<HoldingRepository>);
}
