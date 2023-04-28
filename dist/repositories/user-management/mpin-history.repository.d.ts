import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUser, MpinHistory, MpinHistoryRelations } from '../../models';
import { AppUserRepository } from './app-user.repository';
export declare class MpinHistoryRepository extends BaseLocalRepository<MpinHistory, typeof MpinHistory.prototype.id, MpinHistoryRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof MpinHistory.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
