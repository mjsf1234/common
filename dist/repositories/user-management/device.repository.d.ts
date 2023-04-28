import { AppVersionRepository, BaseLocalRepository, IdcomDetailsRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { AppUser, PreLoginUser, Device, DeviceRelations, AppVersion, IdcomDetails } from '../../models';
import { AppUserRepository } from './app-user.repository';
import { PreLoginUserRepository } from './pre-login-user.repository';
export declare class DeviceRepository extends BaseLocalRepository<Device, typeof Device.prototype.id, DeviceRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof Device.prototype.id>;
    readonly preLoginUser: BelongsToAccessor<PreLoginUser, typeof Device.prototype.id>;
    readonly appVersion: BelongsToAccessor<AppVersion, typeof Device.prototype.id>;
    readonly idcomDetails: HasManyRepositoryFactory<IdcomDetails, typeof Device.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>, preLoginUserRepositoryGetter: Getter<PreLoginUserRepository>, appVersionRepositoryGetter: Getter<AppVersionRepository>, idcomDetailsRepositoryGetter: Getter<IdcomDetailsRepository>);
}
