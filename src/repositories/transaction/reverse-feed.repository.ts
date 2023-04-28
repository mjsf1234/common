import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {TransactionAppFile, AppUser, ReverseFeed, ReverseFeedRelations, Rta} from '../../models';
import {RtaRepository} from '../master-data';
import {AppUserRepository} from '../user-management';
import {TransactionAppFileRepository} from './transaction-app-file.repository';

export class ReverseFeedRepository extends BaseLocalRepository<ReverseFeed, typeof ReverseFeed.prototype.id, ReverseFeedRelations> {
  public readonly rta: BelongsToAccessor<Rta, typeof ReverseFeed.prototype.id>;
  public readonly uploadedByAppUser: BelongsToAccessor<AppUser, typeof ReverseFeed.prototype.id>;
  public readonly transactionAppFile: BelongsToAccessor<TransactionAppFile, typeof ReverseFeed.prototype.id>;
  public readonly deletedByAppUser: BelongsToAccessor<AppUser, typeof ReverseFeed.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('RtaRepository') rtaRepositoryGetter: Getter<RtaRepository>,
    @repository.getter('AppUserRepository') uploadedByAppUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('TransactionAppFileRepository') transactionAppFileRepositoryGetter: Getter<TransactionAppFileRepository>,
    @repository.getter('AppUserRepository') deletedByAppUserRepositoryGetter: Getter<AppUserRepository>
  ) {
    super(ReverseFeed, dataSource);
    this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
    this.uploadedByAppUser = this.createBelongsToAccessorFor('uploadedByAppUser', uploadedByAppUserRepositoryGetter);
    this.transactionAppFile = this.createBelongsToAccessorFor('transactionAppFile', transactionAppFileRepositoryGetter);
    this.deletedByAppUser = this.createBelongsToAccessorFor('deletedByAppUser', deletedByAppUserRepositoryGetter);

    this.registerInclusionResolver('rta', this.rta.inclusionResolver);
    this.registerInclusionResolver('uploadedByAppUser', this.uploadedByAppUser.inclusionResolver);
    this.registerInclusionResolver('transactionAppFile', this.transactionAppFile.inclusionResolver);
    this.registerInclusionResolver('deletedByAppUser', this.deletedByAppUser.inclusionResolver);
  }
}
