import { AppUserRepository, BaseLocalRepository } from '..';
import { TransactionAppFileRepository } from './transaction-app-file.repository';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { TransactionAppFile, AppUser, CasRequest, CasRequestRelations } from '../../models';
export declare class CasRequestRepository extends BaseLocalRepository<CasRequest, typeof CasRequest.prototype.id, CasRequestRelations> {
    readonly transactionAppFile: BelongsToAccessor<TransactionAppFile, typeof TransactionAppFile.prototype.id>;
    readonly user: BelongsToAccessor<AppUser, typeof AppUser.prototype.id>;
    constructor(dataSource: juggler.DataSource, userRepositoryGetter: Getter<AppUserRepository>, transactionAppFileRepositoryGetter: Getter<TransactionAppFileRepository>);
}
