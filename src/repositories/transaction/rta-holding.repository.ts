import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {TransactionAppFile, AppUser, Rta, RtaHolding, RtaHoldingReconciliation, RtaHoldingRelations} from '../../models';
import {RtaRepository} from '../master-data';
import {AppUserRepository} from '../user-management';
import {TransactionAppFileRepository} from './transaction-app-file.repository';
import {RtaHoldingReconciliationRepository} from './rta-holding-reconciliation.repository';

export class RtaHoldingRepository extends BaseLocalRepository<RtaHolding, typeof RtaHolding.prototype.id, RtaHoldingRelations> {
  public readonly rta: BelongsToAccessor<Rta, typeof RtaHolding.prototype.id>;
  public readonly uploadedByAppUser: BelongsToAccessor<AppUser, typeof RtaHolding.prototype.id>;
  public readonly transactionAppFile: BelongsToAccessor<TransactionAppFile, typeof RtaHolding.prototype.id>;

  public readonly rtaHoldingReconciliations: HasManyRepositoryFactory<RtaHoldingReconciliation, typeof RtaHolding.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('RtaRepository') rtaRepositoryGetter: Getter<RtaRepository>,
    @repository.getter('AppUserRepository') uploadedByAppUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('TransactionAppFileRepository') transactionAppFileRepositoryGetter: Getter<TransactionAppFileRepository>,
    @repository.getter('RtaHoldingReconciliationRepository')
    rtaHoldingReconciliationRepositoryGetter: Getter<RtaHoldingReconciliationRepository>
  ) {
    super(RtaHolding, dataSource);
    this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
    this.uploadedByAppUser = this.createBelongsToAccessorFor('uploadedByAppUser', uploadedByAppUserRepositoryGetter);
    this.transactionAppFile = this.createBelongsToAccessorFor('transactionAppFile', transactionAppFileRepositoryGetter);

    this.rtaHoldingReconciliations = this.createHasManyRepositoryFactoryFor(
      'rtaHoldingReconciliations',
      rtaHoldingReconciliationRepositoryGetter
    );

    this.registerInclusionResolver('rta', this.rta.inclusionResolver);
    this.registerInclusionResolver('uploadedByAppUser', this.uploadedByAppUser.inclusionResolver);
    this.registerInclusionResolver('transactionAppFile', this.transactionAppFile.inclusionResolver);
    this.registerInclusionResolver('rtaHoldingReconciliations', this.rtaHoldingReconciliations.inclusionResolver);
  }
}
