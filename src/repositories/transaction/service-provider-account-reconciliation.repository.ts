import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {
  ServiceProviderAccountReconciliation,
  ServiceProviderAccountReconciliationRelations,
  ServiceProvider
} from '../../models';
import { ServiceProviderRepository} from '../master-data';

export class ServiceProviderAccountReconciliationRepository extends BaseLocalRepository<
  ServiceProviderAccountReconciliation,
  typeof ServiceProviderAccountReconciliation.prototype.id,
  ServiceProviderAccountReconciliationRelations
> {
  public readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof ServiceProviderAccountReconciliation.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ServiceProviderRepository') serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>,
    ) {
    super(ServiceProviderAccountReconciliation, dataSource);
     this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);

     this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
    }
}
