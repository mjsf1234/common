import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { SystematicMethod, SystematicMethodStatusHistory, SystematicMethodStatusHistoryRelations } from '../../models';
import { SystematicMethodRepository } from '.';
export declare class SystematicMethodStatusHistoryRepository extends BaseLocalRepository<SystematicMethodStatusHistory, typeof SystematicMethodStatusHistory.prototype.id, SystematicMethodStatusHistoryRelations> {
    readonly systematicMethod: BelongsToAccessor<SystematicMethod, typeof SystematicMethodStatusHistory.prototype.id>;
    constructor(dataSource: juggler.DataSource, systematicMethodRepositoryGetter: Getter<SystematicMethodRepository>);
}
