import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Product, ProductTransactionTypeMapping, ProductTransactionTypeMappingRelations, TransactionType } from '../../models';
import { ProductRepository } from './product.repository';
import { TransactionTypeRepository } from './transaction-type.repository';
export declare class ProductTransactionTypeMappingRepository extends BaseLocalRepository<ProductTransactionTypeMapping, typeof ProductTransactionTypeMapping.prototype.id, ProductTransactionTypeMappingRelations> {
    readonly product: BelongsToAccessor<Product, typeof ProductTransactionTypeMapping.prototype.id>;
    readonly transactionType: BelongsToAccessor<TransactionType, typeof ProductTransactionTypeMapping.prototype.id>;
    constructor(dataSource: juggler.DataSource, productRepositoryGetter: Getter<ProductRepository>, transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>);
}
