import { AppUserRepository, BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUser, HTTPAccessLog, HTTPAccessLogRelations } from '../../models';
export declare class HTTPAccessLogRepository extends BaseLocalRepository<HTTPAccessLog, typeof HTTPAccessLog.prototype.id, HTTPAccessLogRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof HTTPAccessLog.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
