import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Rta, ServiceProvider, ServiceProviderRelations, BankBranch } from '../../models';
import { RtaRepository } from './rta.repository';
import { BankBranchRepository } from '.';
export declare class ServiceProviderRepository extends BaseLocalRepository<ServiceProvider, typeof ServiceProvider.prototype.id, ServiceProviderRelations> {
    readonly rta: BelongsToAccessor<Rta, typeof ServiceProvider.prototype.id>;
    readonly bankBranch: BelongsToAccessor<BankBranch, typeof ServiceProvider.prototype.id>;
    constructor(dataSource: juggler.DataSource, rtaRepositoryGetter: Getter<RtaRepository>, bankBranchRepositoryGetter: Getter<BankBranchRepository>);
}
