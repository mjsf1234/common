import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AdobeNtbUser, AdobeNtbUserRelations, AppUser } from '../../models';
import { AppUserRepository } from './app-user.repository';
export declare class AdobeNtbRepository extends BaseLocalRepository<AdobeNtbUser, typeof AdobeNtbUser.prototype.id, AdobeNtbUserRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof AdobeNtbUser.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
