import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Account, CsrFatca, CsrFatcaRelations, Rta, UserManagementAppFile} from '../../models';
import {BaseLocalRepository} from '../base-local.repository';
import {RtaRepository} from '../master-data';
import {AccountRepository} from './account.repository';
import {UserManagementAppFileRepository} from './user-management-app-file.repository';

export class CsrFatcaRepository extends BaseLocalRepository<CsrFatca, typeof CsrFatca.prototype.id, CsrFatcaRelations> {
  public readonly account: BelongsToAccessor<Account, typeof Account.prototype.id>;
  public readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof CsrFatca.prototype.id>;
  public readonly rta: BelongsToAccessor<Rta, typeof CsrFatca.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('UserManagementAppFileRepository') userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('RtaRepository') rtaRepositoryGetter: Getter<RtaRepository>
  ) {
    super(CsrFatca, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.userManagementAppFile = this.createBelongsToAccessorFor('userManagementAppFile', userManagementAppFileRepositoryGetter);
    this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);

    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('userManagementAppFile', this.userManagementAppFile.inclusionResolver);
    this.registerInclusionResolver('rta', this.rta.inclusionResolver);
  }
}
