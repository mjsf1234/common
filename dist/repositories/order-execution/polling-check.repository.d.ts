import { BaseLocalRepository } from '..';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, PollingCheck, PollingCheckRelations } from '../../models';
import { AccountRepository } from '../user-management';
export declare class PollingCheckRepository extends BaseLocalRepository<PollingCheck, typeof PollingCheck.prototype.id, PollingCheckRelations> {
    readonly account: BelongsToAccessor<Account, typeof PollingCheck.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>);
}
