import {AppUserRepository, BaseLocalRepository} from '..';
import {TransactionAppFileRepository} from './transaction-app-file.repository';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {TransactionAppFile, AppUser, CasRequest, CasRequestRelations} from '../../models';

export class CasRequestRepository extends BaseLocalRepository<CasRequest, typeof CasRequest.prototype.id, CasRequestRelations> {
  public readonly transactionAppFile: BelongsToAccessor<TransactionAppFile, typeof TransactionAppFile.prototype.id>;
  public readonly user: BelongsToAccessor<AppUser, typeof AppUser.prototype.id>;
  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') userRepositoryGetter: Getter<AppUserRepository>,
    //@todo local app-file repository getter
    @repository.getter('TransactionAppFileRepository') transactionAppFileRepositoryGetter: Getter<TransactionAppFileRepository>
  ) {
    super(CasRequest, dataSource);
    this.transactionAppFile = this.createBelongsToAccessorFor('transactionAppFile', transactionAppFileRepositoryGetter);
    this.user = this.createBelongsToAccessorFor('appUser', userRepositoryGetter);
    //@todo local app File inclusion resolver
    this.registerInclusionResolver('transactionAppFile', this.transactionAppFile.inclusionResolver);
    this.registerInclusionResolver('appUser', this.user.inclusionResolver);
  }
}
