import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUser, Operation, OperationRelations } from '../../models';
import { AppUserRepository } from './app-user.repository';
export declare class OperationRepository extends BaseLocalRepository<Operation, typeof Operation.prototype.id, OperationRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof Operation.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
