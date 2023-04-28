import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUser, LoginLog, LoginLogRelations } from '../../models';
import { AppUserRepository } from '../user-management';
export declare class LoginLogRepository extends BaseLocalRepository<LoginLog, typeof LoginLog.prototype.id, LoginLogRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof LoginLog.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
