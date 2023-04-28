import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUser, UamIntegration, UamIntegrationRelations } from '../../models';
import { AppUserRepository } from './app-user.repository';
export declare class UamIntegrationRepository extends BaseLocalRepository<UamIntegration, typeof UamIntegration.prototype.id, UamIntegrationRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof UamIntegration.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
