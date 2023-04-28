import { BaseLocalRepository } from '..';
import { juggler } from '@loopback/repository';
import { TransactionAppFile, TransactionAppFileRelations } from '../../models';
export declare class TransactionAppFileRepository extends BaseLocalRepository<TransactionAppFile, typeof TransactionAppFile.prototype.id, TransactionAppFileRelations> {
    constructor(dataSource: juggler.DataSource);
}
