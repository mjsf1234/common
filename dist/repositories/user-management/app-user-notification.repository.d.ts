import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUserNotification, AppUserNotificationRelations, AppUser } from '../../models';
import { AppUserRepository } from './app-user.repository';
export declare class AppUserNotificationRepository extends BaseLocalRepository<AppUserNotification, typeof AppUserNotification.prototype.id, AppUserNotificationRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof AppUserNotification.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
