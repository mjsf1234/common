import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { ActivityLog, ActivityLogRelations, AppUser } from '../../models';
import { AppUserRepository } from '../user-management';
export declare class ActivityLogRepository extends BaseLocalRepository<ActivityLog, typeof ActivityLog.prototype.id, ActivityLogRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof ActivityLog.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
