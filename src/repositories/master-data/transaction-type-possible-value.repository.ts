import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {TransactionType, TransactionTypePossibleValue, TransactionTypePossibleValueRelations} from '../../models';
import {TransactionTypeRepository} from './transaction-type.repository';

export class TransactionTypePossibleValueRepository extends BaseLocalRepository<
  TransactionTypePossibleValue,
  typeof TransactionTypePossibleValue.prototype.id,
  TransactionTypePossibleValueRelations
> {
  public readonly transactionType: BelongsToAccessor<TransactionType, typeof TransactionTypePossibleValue.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('TransactionTypeRepository') transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>
  ) {
    super(TransactionTypePossibleValue, dataSource);
    this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);

    this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
  }
}
