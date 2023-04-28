import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { UserNotificationToken, UserNotificationTokenRelations, AppUser } from '../../models';
import { AppUserRepository } from './app-user.repository';
export declare class UserNotificationTokenRepository extends BaseLocalRepository<UserNotificationToken, typeof UserNotificationToken.prototype.id, UserNotificationTokenRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof UserNotificationToken.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
