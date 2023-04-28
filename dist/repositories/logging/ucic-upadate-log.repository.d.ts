import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUser, UcicUpdateLog, UcicUpdateLogRelations } from '../../models';
import { AppUserRepository } from '../user-management';
export declare class UcicUpdateLogRepository extends BaseLocalRepository<UcicUpdateLog, typeof UcicUpdateLog.prototype.id, UcicUpdateLogRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof UcicUpdateLog.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
