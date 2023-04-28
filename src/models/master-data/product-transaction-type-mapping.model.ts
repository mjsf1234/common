import {belongsTo, model} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Product} from './product.model';
import {TransactionType} from './transaction-type.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'product_transaction_type_mapping'},
    plural: 'ProductTransactionTypeMappings',
    foreignKeys: {
      fkidx_product_transaction_type_mapping_product_fk_id_product: {
        name: 'fkidx_product_transaction_type_mapping_product_fk_id_product',
        foreignKey: 'fk_id_product',
        entityKey: 'id',
        entity: 'Product'
      },
      fkidx_product_trxn_type_mapping_trxn_type_fk_id_transaction_type: {
        name: 'fkidx_product_trxn_type_mapping_trxn_type_fk_id_transaction_type',
        foreignKey: 'fk_id_transaction_type',
        entityKey: 'id',
        entity: 'TransactionType'
      }
    },
    hiddenProperties: ['fk_id_product', 'fk_id_transaction_type']
  }
})
export class ProductTransactionTypeMapping extends BaseSQLModel {
  @belongsTo(
    () => Product,
    {
      name: 'product',
      keyFrom: 'productId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_product', dataType: 'INT', nullable: 'Y'}
    }
  )
  productId: number;

  @belongsTo(
    () => TransactionType,
    {
      name: 'transactionType',
      keyFrom: 'transactionTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_transaction_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  transactionTypeId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ProductTransactionTypeMapping>) {
    super(data);
  }
}

export interface ProductTransactionTypeMappingRelations {
  // describe navigational properties here
}

export type ProductTransactionTypeMappingWithRelations = ProductTransactionTypeMapping & ProductTransactionTypeMappingRelations;
