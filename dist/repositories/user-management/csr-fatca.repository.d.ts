import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, CsrFatca, CsrFatcaRelations, Rta, UserManagementAppFile } from '../../models';
import { BaseLocalRepository } from '../base-local.repository';
import { RtaRepository } from '../master-data';
import { AccountRepository } from './account.repository';
import { UserManagementAppFileRepository } from './user-management-app-file.repository';
export declare class CsrFatcaRepository extends BaseLocalRepository<CsrFatca, typeof CsrFatca.prototype.id, CsrFatcaRelations> {
    readonly account: BelongsToAccessor<Account, typeof Account.prototype.id>;
    readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof CsrFatca.prototype.id>;
    readonly rta: BelongsToAccessor<Rta, typeof CsrFatca.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>, rtaRepositoryGetter: Getter<RtaRepository>);
}
