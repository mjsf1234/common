import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUser, Device, NotificationLog, NotificationLogRelations } from '../../models';
import { AppUserRepository, DeviceRepository } from '../user-management';
export declare class NotificationLogRepository extends BaseLocalRepository<NotificationLog, typeof NotificationLog.prototype.id, NotificationLogRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof NotificationLog.prototype.id>;
    readonly device: BelongsToAccessor<Device, typeof NotificationLog.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>, deviceRepositoryGetter: Getter<DeviceRepository>);
}
