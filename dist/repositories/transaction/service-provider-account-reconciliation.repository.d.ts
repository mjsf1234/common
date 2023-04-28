import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { ServiceProviderAccountReconciliation, ServiceProviderAccountReconciliationRelations, ServiceProvider } from '../../models';
import { ServiceProviderRepository } from '../master-data';
export declare class ServiceProviderAccountReconciliationRepository extends BaseLocalRepository<ServiceProviderAccountReconciliation, typeof ServiceProviderAccountReconciliation.prototype.id, ServiceProviderAccountReconciliationRelations> {
    readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof ServiceProviderAccountReconciliation.prototype.id>;
    constructor(dataSource: juggler.DataSource, serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>);
}
