import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppAccessToken, AppAccessTokenRelations, AppUser } from '../../models';
import { AppUserRepository } from './app-user.repository';
export declare class AppAccessTokenRepository extends BaseLocalRepository<AppAccessToken, typeof AppAccessToken.prototype.id, AppAccessTokenRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof AppAccessToken.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
