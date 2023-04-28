import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { AccountCategory, AccountCategoryRelations } from '../../models';
export declare class AccountCategoryRepository extends BaseLocalRepository<AccountCategory, typeof AccountCategory.prototype.id, AccountCategoryRelations> {
    constructor(dataSource: juggler.DataSource);
}
