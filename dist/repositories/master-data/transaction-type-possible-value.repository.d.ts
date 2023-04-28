import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { TransactionType, TransactionTypePossibleValue, TransactionTypePossibleValueRelations } from '../../models';
import { TransactionTypeRepository } from './transaction-type.repository';
export declare class TransactionTypePossibleValueRepository extends BaseLocalRepository<TransactionTypePossibleValue, typeof TransactionTypePossibleValue.prototype.id, TransactionTypePossibleValueRelations> {
    readonly transactionType: BelongsToAccessor<TransactionType, typeof TransactionTypePossibleValue.prototype.id>;
    constructor(dataSource: juggler.DataSource, transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>);
}
