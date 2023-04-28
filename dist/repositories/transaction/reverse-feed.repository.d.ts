import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { TransactionAppFile, AppUser, ReverseFeed, ReverseFeedRelations, Rta } from '../../models';
import { RtaRepository } from '../master-data';
import { AppUserRepository } from '../user-management';
import { TransactionAppFileRepository } from './transaction-app-file.repository';
export declare class ReverseFeedRepository extends BaseLocalRepository<ReverseFeed, typeof ReverseFeed.prototype.id, ReverseFeedRelations> {
    readonly rta: BelongsToAccessor<Rta, typeof ReverseFeed.prototype.id>;
    readonly uploadedByAppUser: BelongsToAccessor<AppUser, typeof ReverseFeed.prototype.id>;
    readonly transactionAppFile: BelongsToAccessor<TransactionAppFile, typeof ReverseFeed.prototype.id>;
    readonly deletedByAppUser: BelongsToAccessor<AppUser, typeof ReverseFeed.prototype.id>;
    constructor(dataSource: juggler.DataSource, rtaRepositoryGetter: Getter<RtaRepository>, uploadedByAppUserRepositoryGetter: Getter<AppUserRepository>, transactionAppFileRepositoryGetter: Getter<TransactionAppFileRepository>, deletedByAppUserRepositoryGetter: Getter<AppUserRepository>);
}
