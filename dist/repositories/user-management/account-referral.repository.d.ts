import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, AccountReferral, AccountReferralRelations } from '../../models';
import { AccountRepository } from '../user-management';
export declare class AccountReferralRepository extends BaseLocalRepository<AccountReferral, typeof AccountReferral.prototype.id, AccountReferralRelations> {
    readonly account: BelongsToAccessor<Account, typeof AccountReferral.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>);
}
