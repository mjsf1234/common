import { BaseLocalRepository } from '..';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, KarvyAnnexureFeed, KarvyAnnexureFeedRelations } from '../../models';
import { AccountRepository } from '../user-management';
export declare class KarvyAnnexureFeedRepository extends BaseLocalRepository<KarvyAnnexureFeed, typeof KarvyAnnexureFeed.prototype.id, KarvyAnnexureFeedRelations> {
    readonly account: BelongsToAccessor<Account, typeof KarvyAnnexureFeed.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>);
}
