import { AppUserRepository, BaseLocalRepository, DeviceRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { IdcomDetails, AppUser, Device, IdcomDetailsRelations } from '../../models';
export declare class IdcomDetailsRepository extends BaseLocalRepository<IdcomDetails, typeof IdcomDetails.prototype.id, IdcomDetailsRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof IdcomDetails.prototype.id>;
    readonly device: BelongsToAccessor<Device, typeof IdcomDetails.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>, deviceRepositoryGetter: Getter<DeviceRepository>);
}
