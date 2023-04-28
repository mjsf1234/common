import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Product, ProductTransactionTypeMapping, ProductTransactionTypeMappingRelations, TransactionType} from '../../models';
import {ProductRepository} from './product.repository';
import {TransactionTypeRepository} from './transaction-type.repository';

export class ProductTransactionTypeMappingRepository extends BaseLocalRepository<
  ProductTransactionTypeMapping,
  typeof ProductTransactionTypeMapping.prototype.id,
  ProductTransactionTypeMappingRelations
> {
  public readonly product: BelongsToAccessor<Product, typeof ProductTransactionTypeMapping.prototype.id>;
  public readonly transactionType: BelongsToAccessor<TransactionType, typeof ProductTransactionTypeMapping.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ProductRepository') productRepositoryGetter: Getter<ProductRepository>,
    @repository.getter('TransactionTypeRepository') transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>
  ) {
    super(ProductTransactionTypeMapping, dataSource);
    this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter);
    this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);

    this.registerInclusionResolver('product', this.product.inclusionResolver);
    this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
  }
}
