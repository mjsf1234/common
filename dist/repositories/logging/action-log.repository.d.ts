import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { ActionLog, ActionLogRelations, AppUser } from '../../models';
import { AppUserRepository } from '../user-management';
export declare class ActionLogRepository extends BaseLocalRepository<ActionLog, typeof ActionLog.prototype.id, ActionLogRelations> {
    readonly executedByAppUser: BelongsToAccessor<AppUser, typeof ActionLog.prototype.id>;
    constructor(dataSource: juggler.DataSource, executedByAppUserRepositoryGetter: Getter<AppUserRepository>);
}
