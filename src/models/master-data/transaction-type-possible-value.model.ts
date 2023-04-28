import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {TransactionType} from './transaction-type.model';

@model({
  settings: {
    strict: false,
    forceId: false,
    postgresql: {tableName: 'transaction_type_possible_value'},
    plural: 'TransactionTypePossibleValues',
    foreignKeys: {
      fkidx_transaction_type_possible_value_transaction_type_fk_id: {
        name: 'fkidx_transaction_type_possible_value_transaction_type_fk_id',
        foreignKey: 'fk_id_transaction_type',
        entityKey: 'id',
        entity: 'TransactionType'
      }
    },
    indexes :{
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_transaction_type_mapping_value: {keys: {value: 1}, options: {unique: true}}
    },
    hiddenProperties: []
  }
})
export class TransactionTypePossibleValue extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'value', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  value: string;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_applicable_for_reverse_feed', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isApplicableForReverseFeed?: boolean;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_applicable_for_cas', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isApplicableForCAS?: boolean;

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

  constructor(data?: Partial<TransactionTypePossibleValue>) {
    super(data);
  }
}

export interface TransactionTypePossibleValueRelations {
  // describe navigational properties here
}

export type TransactionTypePossibleValueWithRelations = TransactionTypePossibleValue & TransactionTypePossibleValueRelations;
