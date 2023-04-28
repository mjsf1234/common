import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { TransactionAppFile, AppUser, Rta, RtaHolding, RtaHoldingReconciliation, RtaHoldingRelations } from '../../models';
import { RtaRepository } from '../master-data';
import { AppUserRepository } from '../user-management';
import { TransactionAppFileRepository } from './transaction-app-file.repository';
import { RtaHoldingReconciliationRepository } from './rta-holding-reconciliation.repository';
export declare class RtaHoldingRepository extends BaseLocalRepository<RtaHolding, typeof RtaHolding.prototype.id, RtaHoldingRelations> {
    readonly rta: BelongsToAccessor<Rta, typeof RtaHolding.prototype.id>;
    readonly uploadedByAppUser: BelongsToAccessor<AppUser, typeof RtaHolding.prototype.id>;
    readonly transactionAppFile: BelongsToAccessor<TransactionAppFile, typeof RtaHolding.prototype.id>;
    readonly rtaHoldingReconciliations: HasManyRepositoryFactory<RtaHoldingReconciliation, typeof RtaHolding.prototype.id>;
    constructor(dataSource: juggler.DataSource, rtaRepositoryGetter: Getter<RtaRepository>, uploadedByAppUserRepositoryGetter: Getter<AppUserRepository>, transactionAppFileRepositoryGetter: Getter<TransactionAppFileRepository>, rtaHoldingReconciliationRepositoryGetter: Getter<RtaHoldingReconciliationRepository>);
}
