import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Rta, ServiceProvider, ServiceProviderRelations, BankBranch} from '../../models';
import {RtaRepository} from './rta.repository';
import {BankBranchRepository} from '.';

export class ServiceProviderRepository extends BaseLocalRepository<
  ServiceProvider,
  typeof ServiceProvider.prototype.id,
  ServiceProviderRelations
> {
  public readonly rta: BelongsToAccessor<Rta, typeof ServiceProvider.prototype.id>;
  public readonly bankBranch: BelongsToAccessor<BankBranch, typeof ServiceProvider.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('RtaRepository') rtaRepositoryGetter: Getter<RtaRepository>,
  @repository.getter('BankBranchRepository') bankBranchRepositoryGetter: Getter<BankBranchRepository>) {
    super(ServiceProvider, dataSource);
    this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
    this.bankBranch = this.createBelongsToAccessorFor('bankBranch', bankBranchRepositoryGetter);

    this.registerInclusionResolver('rta', this.rta.inclusionResolver);
    this.registerInclusionResolver('bankBranch', this.bankBranch.inclusionResolver);
  }
}
