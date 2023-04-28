import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Alert, AlertRelations, AppUser } from '../../models';
import { AppUserRepository } from './app-user.repository';
export declare class AlertRepository extends BaseLocalRepository<Alert, typeof Alert.prototype.id, AlertRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof Alert.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
